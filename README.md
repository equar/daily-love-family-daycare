# Daily Love Family Daycare Website

Production-ready static website template for Daily Love Family Daycare in Montgomery County, Maryland, built with Astro and TypeScript.

## Project Overview

This project provides a warm, family-oriented, professional childcare website with:

- Home, About, Programs, Daily Schedule, Health and Safety, Enrollment, Contact, and Privacy Policy pages
- Reusable Astro component architecture
- Editable centralized daycare content in data files
- Accessible semantic HTML and responsive modern CSS
- Minimal JavaScript for mobile navigation and contact form behavior
- Static hosting compatibility (Cloudflare Pages, Netlify, GitHub Pages, GoDaddy static hosting)

## Technology Stack

- Astro
- TypeScript
- Semantic HTML5
- Modern responsive CSS
- Minimal vanilla JavaScript

## Prerequisites

- Node.js 20+
- npm 10+

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Validation

```bash
npm run check
```

## Edit Daycare Information

Update all business details in [src/data/siteConfig.ts](src/data/siteConfig.ts).

Key values include:

- Business name
- Phone and email
- Address and county
- Business and tour hours
- Licensing wording placeholders
- Program availability
- Social links
- Canonical URL

## Replace Images

- Hero placeholder: [public/images/hero-placeholder.svg](public/images/hero-placeholder.svg)
- OG image placeholder: update [src/data/siteConfig.ts](src/data/siteConfig.ts) and replace referenced file in [public/images](public/images)
- Favicon placeholder: [public/favicon/favicon.svg](public/favicon/favicon.svg)

Use optimized AVIF, WebP, or compressed JPEG/PNG for production assets.

## Configure Contact Form

1. Copy .env.example to .env.
2. Set provider and values:
   - PUBLIC_FORM_PROVIDER=formspree and PUBLIC_FORMSPREE_ENDPOINT
   - or PUBLIC_FORM_PROVIDER=web3forms and PUBLIC_WEB3FORMS_ACCESS_KEY
3. Keep private keys server-side only; do not expose secrets in client code.

## Update SEO Metadata

- Page-level SEO config: [src/data/seo.ts](src/data/seo.ts)
- Global canonical URL and defaults: [src/data/siteConfig.ts](src/data/siteConfig.ts)
- Structured data layout: [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro)
- robots: [public/robots.txt](public/robots.txt)
- sitemap: [public/sitemap.xml](public/sitemap.xml)
- manifest: [public/site.webmanifest](public/site.webmanifest)

## Add Your Domain

1. Set canonicalUrl in [src/data/siteConfig.ts](src/data/siteConfig.ts).
2. Update site in [astro.config.mjs](astro.config.mjs).
3. Update [public/robots.txt](public/robots.txt) and [public/sitemap.xml](public/sitemap.xml) URLs.
4. Rebuild and redeploy.

## Deployment

### Cloudflare Pages

1. Push repository to GitHub.
2. Create a Cloudflare Pages project from the repo.
3. Build command: npm run build
4. Output directory: dist
5. Add environment variables from .env (if using forms).
6. Deploy.

### Netlify

1. Connect repository in Netlify.
2. Build command: npm run build
3. Publish directory: dist
4. Add environment variables in Site settings.
5. Deploy.

### GitHub Pages

1. Run npm run build.
2. Publish the dist folder via GitHub Actions or branch-based static publishing.
3. If using a project subpath, configure Astro base path accordingly.
4. Ensure custom domain and HTTPS are enabled in repository Pages settings.

### GoDaddy Static Hosting

1. Run npm run build locally.
2. Upload all files from dist via GoDaddy file manager or FTP.
3. Configure domain DNS to point to the hosting destination.
4. Enable SSL/HTTPS in hosting controls.

## Environment Variables

Reference file: [.env.example](.env.example)

Used variables:

- PUBLIC_FORM_PROVIDER
- PUBLIC_FORMSPREE_ENDPOINT
- PUBLIC_WEB3FORMS_ACCESS_KEY

## Prelaunch Checklist

- [ ] Confirm official business name
- [ ] Confirm address
- [ ] Confirm phone number
- [ ] Confirm email address
- [ ] Confirm business hours
- [ ] Confirm age groups served
- [ ] Confirm program availability
- [ ] Confirm licensing authority
- [ ] Confirm license number
- [ ] Confirm caregiver credentials
- [ ] Confirm CPR and First Aid wording
- [ ] Confirm meal information
- [ ] Confirm tuition information
- [ ] Confirm enrollment requirements
- [ ] Replace all placeholder images
- [ ] Obtain permission for testimonials and photos
- [ ] Test the inquiry form
- [ ] Test all links
- [ ] Test mobile layout
- [ ] Test accessibility
- [ ] Review privacy policy
- [ ] Review all legal and licensing statements
- [ ] Connect the custom domain
- [ ] Enable HTTPS
- [ ] Test the production website

## Notes

- This template avoids unsupported legal, medical, or licensing claims.
- Confirm official licensing language and related details before publication.
- Do not publish tuition amounts until finalized.
