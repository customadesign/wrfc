# Deploying Calico Rock Fishing Resort to Render

## Prerequisites
- GitHub repository already set up at: https://github.com/customadesign/wrfc
- Render account (sign up at https://render.com)

## Deployment Steps

### Option 1: Using Render Dashboard (Recommended)

1. **Sign in to Render**
   - Go to https://dashboard.render.com
   - Sign in with your account

2. **Create New Static Site**
   - Click "New +" button
   - Select "Static Site"

3. **Connect GitHub Repository**
   - Connect your GitHub account if not already connected
   - Select the repository: `customadesign/wrfc`
   - Click "Connect"

4. **Configure Build Settings**
   - **Name**: `calico-rock-fishing-resort` (or your preferred name)
   - **Branch**: `main`
   - **Root Directory**: Leave blank (repository root)
   - **Build Command**: `cd calico-rock-fishing && npm install && npm run build`
   - **Publish Directory**: `calico-rock-fishing/dist`

5. **Deploy**
   - Click "Create Static Site"
   - Wait for the build to complete (5-10 minutes)
   - Your site will be available at: `https://calico-rock-fishing-resort.onrender.com`

### Option 2: Using render.yaml (Automatic)

The repository already includes a `render.yaml` configuration file that automates the deployment settings.

1. **Sign in to Render**
   - Go to https://dashboard.render.com

2. **New Blueprint Instance**
   - Click "New +" → "Blueprint"
   - Connect the GitHub repository: `customadesign/wrfc`
   - Render will automatically detect the `render.yaml` file
   - Click "Apply" to create the service

3. **Automatic Deployment**
   - The site will build and deploy automatically
   - Future pushes to the `main` branch will trigger automatic deployments

## Custom Domain Setup (Optional)

1. **In Render Dashboard**
   - Go to your static site's settings
   - Navigate to "Custom Domains"
   - Add your domain: `www.calicorock.com` (or your domain)

2. **DNS Configuration**
   - Add a CNAME record pointing to your Render URL
   - Or use Render's provided nameservers

## Environment Variables

This static site doesn't require environment variables, but if you add any API integrations later:

1. Go to "Environment" in your Render service
2. Add variables as needed
3. Rebuild the service to apply changes

## Build Optimization

The current build configuration includes:
- TypeScript compilation
- Vite bundling and optimization
- Asset optimization
- Tree shaking for smaller bundle size

## Monitoring

- Check build logs in the Render dashboard
- Monitor site performance in the "Metrics" tab
- Set up notifications for failed deploys

## Troubleshooting

### Build Failures
- Check the build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript has no compilation errors locally

### Large Files
- The `.gitignore` already excludes large video files
- Consider using CDN for media assets if needed

### Performance
- The site uses Vite's optimization for fast loading
- Static hosting on Render includes CDN automatically

## Updating the Site

1. Make changes locally
2. Test with `npm run build` locally
3. Commit and push to GitHub
4. Render will automatically rebuild and deploy

## Support

- Render Documentation: https://render.com/docs
- Render Community: https://community.render.com
- GitHub Repository: https://github.com/customadesign/wrfc