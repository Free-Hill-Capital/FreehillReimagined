import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import dotenv from "dotenv";

// Load environment variables from .env file (for local development)
// On Replit, use Secrets instead
dotenv.config();

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // ===================================================================
  // PERMANENT 301 REDIRECTS - OLD URLS TO NEW STRUCTURE
  // These must be at the top before registerRoutes to prevent conflicts
  // ===================================================================
  
  // Redirect old industries pages to homepage
  app.get('/industries', (req, res) => {
    res.redirect(301, '/');
  });
  
  app.get('/industries-categories/real-estate', (req, res) => {
    res.redirect(301, '/');
  });
  
  app.get('/industries-categories/construction', (req, res) => {
    res.redirect(301, '/');
  });
  
  app.get('/industries-categories/financial-services', (req, res) => {
    res.redirect(301, '/');
  });
  
  app.get('/industries-categories/credit-facilities', (req, res) => {
    res.redirect(301, '/');
  });
  
  app.get('/industries-categories/retail', (req, res) => {
    res.redirect(301, '/');
  });
  
  app.get('/industries-categories/healthcare', (req, res) => {
    res.redirect(301, '/');
  });
  
  // Catch-all for any other industries-categories pages
  app.get('/industries-categories/*', (req, res) => {
    res.redirect(301, '/');
  });
  
  // Redirect old insights/blog pages to homepage
  app.get('/insights/the-importance-of-supplements-in-insurance-claims-for-contractors', (req, res) => {
    res.redirect(301, '/');
  });
  
  // Catch-all for any other insights pages
  app.get('/insights/*', (req, res) => {
    res.redirect(301, '/');
  });
  
  // Redirect old application form to contact page
  app.get('/application-form', (req, res) => {
    res.redirect(301, '/contact');
  });
  
  // Redirect old careers page to homepage
  app.get('/careers', (req, res) => {
    res.redirect(301, '/');
  });
  
  // Redirect old API endpoint to homepage
  app.get('/api/v1/access-tokens', (req, res) => {
    res.redirect(301, '/');
  });

  const server = await registerRoutes(app);

  // Catch-all for undefined API routes - returns JSON 404 to prevent indexing
  app.use('/api/*', (req, res) => {
    return res.status(404).json({ error: 'Not Found' });
  });

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '7000', 10);
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();
