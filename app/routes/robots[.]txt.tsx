export const loader = async () => {
  const baseUrl = "https://www.speedycashhomeoffers.com";

  const robotsTxt = `User-agent: *
Allow: /

# Disallow old WordPress paths and non-existent routes
Disallow: /buyer-investor/
Disallow: /map/
Disallow: /home/
Disallow: /for-buyers/
Disallow: /writer/
Disallow: /author/
Disallow: /tag/
Disallow: /category/
Disallow: /__manifest
Disallow: /wp-*
Disallow: /*/feed/
Disallow: /*/feed

# Note: Old WordPress paths and blog posts return 410 Gone (permanently removed)
# - Old WordPress paths like /buyer-investor, /map return 410 Gone immediately
# - Old WordPress blog posts (WordPress-style slugs) return 410 Gone immediately
# - This happens BEFORE query parameter processing, so even URLs with query params return 410

# Note: Problematic query parameters are automatically stripped and redirected (301 permanent)
# - WordPress cron URLs (?doing_wp_cron=...) redirect to clean URLs (only for valid routes)
# - AMP URLs (?amp=1) redirect to canonical versions (only for valid routes)
# - Search query parameters (?q=, ?noamp=) redirect to clean URLs (only for valid routes)
# These redirects happen before any page rendering, ensuring proper canonicalization

# Disallow admin or sensitive areas (if any exist in the future)
# Disallow: /admin/
# Disallow: /private/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
};
