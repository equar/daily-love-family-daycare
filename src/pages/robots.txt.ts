import type { APIRoute } from "astro";

const siteUrl = import.meta.env.PUBLIC_SITE_URL || "https://example.com";

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl.replace(/\/$/, "")}/sitemap-index.xml\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
