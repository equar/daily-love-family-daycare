# Cloudflare Pages Deployment Guide

This project is configured for automatic static deployment from GitHub to Cloudflare Pages.

## 1. Push project to GitHub

1. Ensure your default production branch is main.
2. Push commits:

   git push origin main

## 2. Login to Cloudflare Dashboard

1. Open Cloudflare dashboard.
2. Select your account.

## 3. Open Pages

1. In the left menu, open Workers & Pages.
2. Select Pages.

## 4. Create Project

1. Click Create application.
2. Choose Pages.
3. Choose Connect to Git.

## 5. Connect GitHub

1. Authorize Cloudflare to access your GitHub account if prompted.
2. Select repository: equar/daily-love-family-daycare.

## 6. Select repository and branch

1. Production branch: main.
2. Cloudflare will create preview deployments for pull requests and non-production branch pushes.

## 7. Configure build settings

Use the following:

- Framework preset: Astro
- Build command: npm run build
- Build output directory: dist
- Root directory: /
- Node.js version: current LTS

## 8. Configure environment variables

Add the same values as your local .env based on .env.example:

- PUBLIC_SITE_URL
- PUBLIC_BUSINESS_NAME
- PUBLIC_PHONE
- PUBLIC_EMAIL
- PUBLIC_ADDRESS
- PUBLIC_GOOGLE_MAPS
- PUBLIC_FORM_ENDPOINT
- PUBLIC_FACEBOOK
- PUBLIC_INSTAGRAM
- PUBLIC_LICENSE_NUMBER
- PUBLIC_LICENSE_AUTHORITY
- PUBLIC_GA_ID
- PUBLIC_BASE_PATH

Do not add private secrets in public variables.

## 9. Deploy

1. Click Save and Deploy.
2. Cloudflare builds and publishes the site.
3. A production URL is generated automatically.

## 10. Automatic deployments

After initial setup, deployment flow is automatic:

Developer -> VS Code -> GitHub (git push origin main) -> Cloudflare Pages -> Production

No manual build/upload is required after integration is configured.

## 11. Preview deployments

- Pull requests and non-production branches get preview URLs.
- Use previews to validate content and styling before merge.

## 12. Rollback

1. Open Pages project.
2. Open Deployments tab.
3. Select a previous successful deployment.
4. Use Retry deployment or rollback to that version.

## 13. Custom domain and SSL

1. In Pages project, open Custom domains.
2. Add your domain.
3. Follow DNS instructions shown by Cloudflare.
4. SSL is automatically provisioned and managed by Cloudflare.

## 14. Production verification

After deployment, verify:

- Homepage loads without console errors
- /robots.txt returns expected content
- /sitemap-index.xml is reachable
- Metadata, Open Graph, and manifest are present
- Contact form endpoint works
