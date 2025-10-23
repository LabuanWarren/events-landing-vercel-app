# Deployment Guide for Vercel

This guide will walk you through deploying the Typid Events landing page to Vercel.

## Prerequisites

- A Vercel account (free tier works perfectly)
- Git repository (GitHub, GitLab, or Bitbucket)

## Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect the framework settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`
     - Node Version: 20.x (auto-detected from package.json)

3. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

4. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow Vercel's DNS configuration instructions

## Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project or create new
   - Confirm settings
   - Wait for deployment

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Configuration Files

The project includes the following Vercel-specific configuration:

- **vercel.json**: Configures URL rewrites for SPA routing
- **package.json**: Specifies Node.js version and build commands
- **.vercelignore**: Excludes unnecessary files from deployment

## Environment Variables

If you need to add environment variables:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables (e.g., API keys, feature flags)
4. Redeploy for changes to take effect

## Troubleshooting

### Build Fails with "pnpm-lock.yaml" Error

**Solution**: This project uses npm, not pnpm. Make sure:
- You're using `npm install` (not `pnpm install`)
- There's no `pnpm-lock.yaml` file in the repository
- The build command in Vercel is set to use npm

### 404 Errors on Page Refresh

**Solution**: The `vercel.json` file already includes rewrites configuration. If you still see 404s:
1. Ensure `vercel.json` is committed to your repository
2. Redeploy the project

### Build Fails Due to Node Version

**Solution**: The project requires Node.js 20+
1. Check that `package.json` includes the engines field
2. Vercel should auto-detect and use Node 20.x
3. If not, manually set it in Vercel Project Settings → General → Node.js Version

### Missing Images or Assets

**Solution**: Ensure the `public` folder is committed to your repository
```bash
git add public/
git commit -m "Add public assets"
git push
```

## Post-Deployment Checklist

- ✅ Site loads correctly
- ✅ All images and assets are visible
- ✅ Navigation works (home, privacy, terms)
- ✅ Page refreshes work without 404 errors
- ✅ Mobile responsive design works
- ✅ All interactive elements function properly

## Continuous Deployment

Once connected to Git:
- Every push to `main` branch triggers a production deployment
- Pull requests automatically create preview deployments
- You can configure deployment protection in Vercel settings

## Performance Optimization

Vercel automatically provides:
- Global CDN for fast content delivery
- Automatic HTTPS
- Image optimization
- Edge caching
- Analytics (available in dashboard)

## Support

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

## Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router and Vercel](https://vercel.com/guides/deploying-react-with-vercel)

