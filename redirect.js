export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Only serve the sitemap path
    if (url.pathname !== "/sitemap.xml") {
      return new Response("Not Found", { status: 404 });
    }

    // Fetch from the origin over HTTPS (internally), but serve back over HTTP
    const response = await fetch("https://vpn.kalata.cc/sitemap.xml", {
      headers: {
        "User-Agent": request.headers.get("User-Agent") || "Cloudflare-Worker",
        "Accept": request.headers.get("Accept") || "application/xml, text/xml, */*",
      },
    });

    // Clone and return with explicit headers — no redirect, plain HTTP response
    return new Response(response.body, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "application/xml",
        "Cache-Control": "public, max-age=3600",
        // Prevent any HSTS or upgrade-insecure-requests headers
        "Strict-Transport-Security": "",
      },
    });
  },
};
