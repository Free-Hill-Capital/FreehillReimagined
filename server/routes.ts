import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import sgMail from "@sendgrid/mail";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { fullName, address, email, phone, message } = req.body;

      // Validate required fields
      if (!fullName || !address || !email || !phone || !message) {
        return res.status(400).json({ 
          success: false, 
          error: "All fields are required" 
        });
      }

      // Get environment variables
      const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "";
      const TEST_MODE = process.env.TEST_MODE === "true" || process.env.TEST_MODE === "yes";

      // Check if SendGrid API key is configured
      if (!SENDGRID_API_KEY) {
        console.error("SendGrid API key is not configured");
        return res.status(500).json({
          success: false,
          error: "Email service is not configured"
        });
      }

      // Initialize SendGrid with the API key
      sgMail.setApiKey(SENDGRID_API_KEY);

      // Determine recipient email based on TEST_MODE
      const recipientEmail = TEST_MODE 
        ? "mikeanthony595@gmail.com" 
        : "info@freehillcapital.com";

      console.log(`Sending email to: ${recipientEmail} (Test Mode: ${TEST_MODE})`);

      // Prepare email content
      const emailContent = {
        to: recipientEmail,
        from: "may@freehillcapital.com", // Verified sender email
        replyTo: email, // Reply to the person who submitted the form
        subject: `New Contact Form Submission from ${fullName}`,
        text: `
New Contact Form Submission
${TEST_MODE ? "[TEST MODE]" : ""}

Full Name: ${fullName}
Address: ${address}
Email: ${email}
Phone: ${phone}

Message:
${message}
        `,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="800" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #000000; padding: 50px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 30px; font-weight: 700; letter-spacing: -0.5px;">
                Contact Us Form - Free Hill Capital Re-Imagined
              </h1>
              ${TEST_MODE ? `
              <div style="background-color: #ffffff; color: #000000; padding: 10px 20px; border-radius: 8px; display: inline-block; margin-top: 20px; font-weight: 600; font-size: 16px;">
                🧪 TEST MODE
              </div>
              ` : ''}
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 50px 40px;">
              
              <!-- Contact Information -->
              <div style="background-color: #fafafa; border-left: 6px solid #000000; padding: 32px; border-radius: 10px; margin-bottom: 32px;">
                <h2 style="margin: 0 0 24px 0; color: #000000; font-size: 24px; font-weight: 600;">
                  Contact Information
                </h2>
                
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 12px 0; vertical-align: top;">
                      <div style="display: inline-block; width: 100%;">
                        <span style="color: #666666; font-size: 16px; display: block; margin-bottom: 6px;">👤 Full Name</span>
                        <span style="color: #000000; font-size: 20px; font-weight: 600;">${fullName}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; vertical-align: top;">
                      <div style="display: inline-block; width: 100%;">
                        <span style="color: #666666; font-size: 16px; display: block; margin-bottom: 6px;">📍 Address</span>
                        <span style="color: #000000; font-size: 20px; font-weight: 600;">${address}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; vertical-align: top;">
                      <div style="display: inline-block; width: 100%;">
                        <span style="color: #666666; font-size: 16px; display: block; margin-bottom: 6px;">📧 Email</span>
                        <a href="mailto:${email}" style="color: #000000; font-size: 20px; font-weight: 600; text-decoration: underline;">${email}</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; vertical-align: top;">
                      <div style="display: inline-block; width: 100%;">
                        <span style="color: #666666; font-size: 16px; display: block; margin-bottom: 6px;">📞 Phone</span>
                        <a href="tel:${phone}" style="color: #000000; font-size: 20px; font-weight: 600; text-decoration: underline;">${phone}</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Message -->
              <div style="background-color: #ffffff; border: 2px solid #e5e5e5; padding: 32px; border-radius: 10px;">
                <h2 style="margin: 0 0 20px 0; color: #000000; font-size: 24px; font-weight: 600;">
                  💬 Message
                </h2>
                <p style="margin: 0; color: #333333; font-size: 18px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
              </div>

              <!-- Action Button -->
              <div style="text-align: center; margin-top: 40px;">
                <a href="mailto:${email}" style="background-color: #000000; color: #ffffff; padding: 18px 40px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 18px; display: inline-block; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
                  Reply to ${fullName.split(' ')[0]}
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #fafafa; padding: 32px 40px; text-align: center; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0; color: #666666; font-size: 16px;">
                This email was sent from your website contact us form.
              </p>
              <p style="margin: 10px 0 0 0; color: #999999; font-size: 14px;">
                Free Hill Capital &copy; ${new Date().getFullYear()}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
      };

      // Send email via SendGrid
      await sgMail.send(emailContent);

      console.log("Email sent successfully!");

      res.json({ 
        success: true, 
        message: "Your message has been sent successfully!",
        testMode: TEST_MODE 
      });

    } catch (error: any) {
      console.error("Error sending email:", error);
      
      // Log detailed error information
      if (error.response) {
        console.error("SendGrid Error Response:", JSON.stringify(error.response.body, null, 2));
      }
      
      // Provide specific error message
      let errorMessage = "Failed to send message. Please try again later.";
      
      if (error.code === 401) {
        errorMessage = "Email service authentication failed. Please contact support.";
        console.error("SendGrid API key is invalid or unauthorized");
      } else if (error.code === 403) {
        errorMessage = "Email service access denied. Please contact support.";
      }
      
      res.status(500).json({ 
        success: false, 
        error: errorMessage,
        details: process.env.NODE_ENV === "development" ? error.message : undefined
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
