export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/sitemap.xml") {
      return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
  <loc>https://vpn.kalata.cc/</loc>
  <lastmod>2026-03-24T17:01:15+00:00</lastmod>
</url>

</urlset>`, {
        headers: {
          "Content-Type": "application/xml",
          "Cache-Control": "public, max-age=3600"
        }
      });
    }

    return fetch(request);
  }
}export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Serve sitemap.xml directly on both HTTP and HTTPS
    if (url.pathname === "/sitemap.xml") {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->

<url>
  <loc>https://vpn.kalata.cc/</loc>
  <lastmod>2026-03-24T17:01:15+00:00</lastmod>
</url>

</urlset>`;

      return new Response(sitemap, {
        headers: {
          "Content-Type": "application/xml; charset=UTF-8",
          "Cache-Control": "public, max-age=3600"
        }
      });
    }

    // Everything else: forward to Cloudflare Pages
    return fetch(request);
  }
}

