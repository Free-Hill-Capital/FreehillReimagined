# FreehillReimagined

## Environment Setup

### Local Development
1. Copy `.env.example` to `.env`
2. Add your SendGrid API key to `.env`
3. Run `npm install`
4. Run `npm run dev`

### Replit Deployment
1. Go to the Secrets tab (🔒 icon in left sidebar)
2. Add the following secrets:
   - `PORT` = `7000`
   - `SENDGRID_API_KEY` = `your_sendgrid_api_key`
   - `TEST_MODE` = `true`
3. Click "Run" button

The app will automatically use Replit Secrets when deployed on Replit, and `.env` file for local development.

**Important:** Never commit the `.env` file to git. It's already in `.gitignore`.
