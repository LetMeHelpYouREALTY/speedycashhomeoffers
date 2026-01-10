import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";
import Navigation from "./components/Navigation";

export const links: Route.LinksFunction = () => [
  // Preconnect to font domains early (DNS lookup optimization)
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  // Preconnect to third-party services for faster resource loading
  { rel: "preconnect", href: "https://res.cloudinary.com" },
  { rel: "dns-prefetch", href: "https://api.followupboss.com" },
  { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
  { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
  // Preload CSS as style to allow parallel fetching (non-blocking)
  {
    rel: "preload",
    href: stylesheet,
    as: "style",
  },
  // Load main stylesheet (preloaded above for faster loading)
  { rel: "stylesheet", href: stylesheet },
  // Load Google Fonts asynchronously to prevent render blocking
  // Using media="print" trick: browser loads it with low priority, then switches to "all"
  // Added font-display=swap via URL parameter for faster text rendering
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    media: "print",
  } as any,
];

export const loader = async ({ request }: { request: Request }) => {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    // Get pathname early for all checks
    const pathname = url.pathname.toLowerCase();

    // Handle robots.txt early - return plain text response immediately (before any other processing)
    if (pathname === "/robots.txt") {
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

      throw new Response(robotsTxt, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=86400", // Cache for 24 hours
        },
      });
    }

    // Handle sitemap.xml early - return XML response immediately (before any other processing)
    // Handle both /sitemap.xml and /sitemap.xml/ (with trailing slash)
    if (pathname === "/sitemap.xml" || pathname === "/sitemap.xml/") {
      const baseUrl = "https://www.speedycashhomeoffers.com";
      const currentDate = new Date().toISOString().split("T")[0];
      const recentUpdate = currentDate;
      const stableDate = "2025-01-15";

      const routes = [
        { url: "/", priority: "1.0", changefreq: "weekly", lastmod: recentUpdate },
        { url: "/process", priority: "0.8", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/testimonials", priority: "0.7", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/meet-the-team", priority: "0.7", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/faqs", priority: "0.7", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/blog", priority: "0.8", changefreq: "weekly", lastmod: recentUpdate },
        { url: "/market-insights", priority: "0.8", changefreq: "weekly", lastmod: recentUpdate },
        { url: "/contact", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/thank-you", priority: "0.6", changefreq: "yearly", lastmod: stableDate },
        { url: "/sell-my-house-fast-las-vegas", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/sell-my-house-fast-southern-california", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/sell-my-house-fast-orange-county", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/sell-my-house-fast-san-diego", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/sell-my-house-fast-riverside", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/sell-my-house-fast-inland-empire", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/sellers", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/expired-listing", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/buyers", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/investors", priority: "0.8", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/neighborhoods", priority: "0.8", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/about", priority: "0.8", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/privacy-policy", priority: "0.5", changefreq: "yearly", lastmod: stableDate },
        { url: "/terms-of-service", priority: "0.5", changefreq: "yearly", lastmod: stableDate },
        { url: "/company-history", priority: "0.6", changefreq: "monthly", lastmod: stableDate },
        { url: "/fast-home-cash-offers-usa", priority: "0.8", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/fast-home-cash-offers-reviews", priority: "0.7", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/fast-home-cash-offers-near-me", priority: "0.8", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/fast-home-cash-offers-las-vegas", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/opendoor-cash-offer", priority: "0.7", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/fast-home-offer", priority: "0.8", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/fast-home-cash-offers-nevada", priority: "0.9", changefreq: "monthly", lastmod: recentUpdate },
        { url: "/zillow-cash-offer", priority: "0.7", changefreq: "monthly", lastmod: recentUpdate },
      ];

      const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

      throw new Response(sitemapXml, {
        status: 200,
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }

    // Normalize pathname for comparison (remove trailing slash)
    const normalizedPath =
      pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

    // Define valid routes early for validation checks
    const validRoutes = [
    "/",
    "/process",
    "/testimonials",
    "/meet-the-team",
    "/faqs",
    "/blog",
    "/market-insights",
    "/sell-my-house-fast-las-vegas",
    "/sell-my-house-fast-southern-california",
    "/sell-my-house-fast-orange-county",
    "/sell-my-house-fast-san-diego",
    "/sell-my-house-fast-riverside",
    "/sell-my-house-fast-inland-empire",
    "/sellers",
    "/expired-listing",
    "/buyers",
    "/investors",
    "/neighborhoods",
    "/about",
    "/contact",
    "/thank-you",
    "/privacy-policy",
    "/terms-of-service",
    "/company-history",
    "/fast-home-cash-offers-usa",
    "/fast-home-cash-offers-reviews",
    "/fast-home-cash-offers-near-me",
    "/fast-home-cash-offers-las-vegas",
    "/opendoor-cash-offer",
    "/fast-home-offer",
    "/fast-home-cash-offers-nevada",
    "/zillow-cash-offer",
      "/robots.txt",
      "/sitemap.xml",
    ];

    // Check if path is a valid route
    const isValidRoute = validRoutes.some((route) => {
    if (route === "/") {
      return normalizedPath === "/" || normalizedPath === "";
    }
      return normalizedPath === route || normalizedPath.startsWith(route + "/");
    });

    // Redirect /home to / (homepage) - this should happen BEFORE old WordPress checks
    // Handle both /home and /home/ (with trailing slash)
    if (normalizedPath === "/home" || pathname === "/home" || pathname === "/home/") {
      const homeUrl = new URL("/", url.origin);
      // Redirect to www and HTTPS if needed
      if (homeUrl.hostname === "speedycashhomeoffers.com") {
        homeUrl.hostname = "www.speedycashhomeoffers.com";
      }
      if (homeUrl.protocol === "http:") {
        homeUrl.protocol = "https:";
      }
      throw new Response(null, {
        status: 301,
        headers: {
          Location: homeUrl.toString(),
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    // Check for old WordPress paths BEFORE query parameter stripping
    // This ensures old WordPress paths return 410 Gone immediately, even with query params
    if (!isValidRoute) {
      // Check old WordPress paths first (before blog post detection)
      const oldWordPressPaths = [
        "/buyer-investor",
        "/map",
        // Note: /home is handled separately above - redirects to / (homepage)
        "/for-buyers",
        "/writer",
        "/author",
        "/tag",
        "/category",
        "/__manifest",
      ];

      // Check if pathname starts with any old WordPress path (works with or without trailing slash)
      // Check both normalizedPath (no trailing slash) and pathname (original) for maximum compatibility
      const isOldPath = oldWordPressPaths.some((path) => {
        // Exact match using normalized path (handles trailing slash)
        if (normalizedPath === path) return true;
        // Exact match using original pathname (covers both /path and /path/)
        if (pathname === path || pathname === path + "/") return true;
        // Path prefix match for subpaths (e.g., /writer/drjanduffy/ matches /writer)
        // normalizedPath is already without trailing slash, so we can check directly
        if (normalizedPath.startsWith(path + "/")) return true;
        // Also check original pathname for subpaths (covers cases with trailing slashes)
        if (pathname.startsWith(path + "/")) return true;
        return false;
      });

      if (isOldPath) {
        throw new Response(null, {
          status: 410,
          statusText: "Gone",
          headers: {
            "X-Robots-Tag": "noindex, nofollow",
            "X-WordPress-Content": "removed",
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      }

      // Check for old WordPress blog posts (after checking old paths)
      // WordPress blog posts are typically single-segment paths with many dashes
      const pathSegments = normalizedPath.split("/").filter((segment) => segment.length > 0);
      if (pathSegments.length > 0 && pathSegments.length <= 2) {
        // Check first segment (main slug) and second segment if exists (year/month in URL structure)
        const firstSegment = pathSegments[0];
        
        // WordPress blog post patterns: starts with article/adjective/number words and has multiple dashes
        // Expanded pattern to catch ALL WordPress post patterns including common starters
        const wordPressBlogPostPattern =
          /^(the|why|how|what|when|where|can|should|will|does|is|are|a|an|benefits|top|best|ultimate|complete|guide|tips|tricks|reasons|ways|things|facts|mistakes|secrets|strategies|methods|tools|resources|examples|case|study|reviews|comparison|vs|versus|difference|between|pros|cons|achieve|dream|homeownership|condos|townhomes|infographic|downsizing|retire|expert|quotes|forecast|housing|market|real|estate|agent|buy|sell|home|house|plan|go|you|use|should|new|these|avoid|if|2|3|4|5|6|7|8|9|10|1|2024|2023|2022|2021|2020|2025)-/i;
        const hasMultipleDashes = firstSegment.split("-").length > 3;
        const isLikelyWordPressPost = wordPressBlogPostPattern.test(firstSegment) && hasMultipleDashes;
        
        // Also check if slug starts with a number followed by dash (common WordPress format like "2-of-the-factors")
        const startsWithNumber = /^\d+-/.test(firstSegment);

        // Also check if it's a very long slug with many dashes (typical WordPress post format)
        // WordPress posts often have 5+ dash-separated words (6+ segments)
        // This catches posts that might not start with our known prefixes
        const isVeryLongSlug = firstSegment.split("-").length > 5;
        const isLikelyWordPressByLength = isVeryLongSlug;

        // Additional check: if slug contains common WordPress post patterns (dates, years, common phrases)
        const hasWordPressPatterns =
          firstSegment.includes("-2024") ||
          firstSegment.includes("-2023") ||
          firstSegment.includes("-2022") ||
          firstSegment.includes("-2021") ||
          firstSegment.includes("-2020") ||
          firstSegment.includes("-2025") ||
          (firstSegment.includes("-on-") && firstSegment.includes("-the-")) ||
          (firstSegment.includes("-of-") && hasMultipleDashes) ||
          (firstSegment.includes("-to-") && firstSegment.includes("-the-")) ||
          (firstSegment.includes("-in-") && firstSegment.includes("-the-")) ||
          (firstSegment.includes("-for-") && hasMultipleDashes) ||
          (firstSegment.includes("-your-") && hasMultipleDashes) ||
          (firstSegment.includes("-about-") && hasMultipleDashes) ||
          firstSegment.includes("-mortgage-") ||
          firstSegment.includes("-rates-") ||
          firstSegment.includes("-home-") ||
          firstSegment.includes("-house-") ||
          firstSegment.includes("-homes-") ||
          firstSegment.includes("-selling-") ||
          firstSegment.includes("-buying-");

        // If any of these conditions match, it's a WordPress blog post
        if (isLikelyWordPressPost || isLikelyWordPressByLength || hasWordPressPatterns || startsWithNumber) {
          throw new Response(null, {
            status: 410,
            statusText: "Gone",
            headers: {
              "X-Robots-Tag": "noindex, nofollow",
              "X-WordPress-Content": "removed",
              "Cache-Control": "public, max-age=31536000, immutable",
            },
          });
        }
      }
    }

    // Strip problematic query parameters and redirect to clean URL (301 permanent)
    // ONLY if NOT an old WordPress path (checked above)
    // These query parameters should not be indexed - redirect to canonical URL without them
    const problematicParams = ["doing_wp_cron", "amp", "q", "noamp"];
    const hasProblematicParam = problematicParams.some((param) => searchParams.has(param));

    if (hasProblematicParam) {
      const cleanUrl = new URL(url.pathname, url.origin);
      // Only preserve non-problematic query params (unlikely but safe)
      for (const [key, value] of searchParams.entries()) {
        if (!problematicParams.includes(key)) {
          cleanUrl.searchParams.set(key, value);
        }
      }
      // Redirect to www and HTTPS if needed
      if (cleanUrl.hostname === "speedycashhomeoffers.com") {
        cleanUrl.hostname = "www.speedycashhomeoffers.com";
      }
      if (cleanUrl.protocol === "http:") {
        cleanUrl.protocol = "https:";
      }
      throw new Response(null, {
        status: 301,
        headers: {
          Location: cleanUrl.toString(),
          "Cache-Control": "public, max-age=31536000, immutable",
          "X-Robots-Tag": "noindex, nofollow", // Prevent indexing during redirect
        },
      });
    }

    // Redirect HTTP to HTTPS (301 permanent redirect)
    if (url.protocol === "http:") {
      url.protocol = "https:";
      throw new Response(null, {
        status: 301,
        headers: {
          Location: url.toString(),
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    // Redirect non-www to www (301 permanent redirect)
    if (url.hostname === "speedycashhomeoffers.com") {
      url.hostname = "www.speedycashhomeoffers.com";
      throw new Response(null, {
        status: 301,
        headers: {
          Location: url.toString(),
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    // Handle trailing slashes - redirect to non-trailing slash for all routes except root
    // BUT: Only redirect if it's a valid route - invalid routes will hit the 404 handler
    if (pathname.endsWith("/") && pathname !== "/") {
      // Use the already-computed isValidRoute check, but check path without trailing slash
      const pathWithoutSlash = pathname.slice(0, -1);
      const isRouteWithoutSlash = validRoutes.some((route) => {
        if (route === "/") {
          return pathWithoutSlash === "/" || pathWithoutSlash === "";
        }
        return pathWithoutSlash === route || pathWithoutSlash.startsWith(route + "/");
      });

      // Only redirect valid routes - let 404 handler deal with invalid paths
      if (isRouteWithoutSlash) {
        // Normal trailing slash redirect - preserve query params (already cleaned above)
        const newPath = pathname.slice(0, -1);
        const newUrl = new URL(newPath, url.origin);
        // Preserve existing query params (after WordPress cron/amp removal above)
        for (const [key, value] of url.searchParams.entries()) {
          newUrl.searchParams.set(key, value);
        }
        throw new Response(null, {
          status: 301,
          headers: {
            Location: newUrl.toString(),
            "Cache-Control": "public, max-age=31536000, immutable",
          },
        });
      }
      // If not a valid route, let it fall through to React Router which will hit the 404 handler
    }

    return {};
  } catch (error) {
    // If there's any error in the loader, log it and return a proper 500 response
    // This prevents unhandled errors from causing issues
    console.error("Loader error:", error);

    // If the error is already a Response (redirect/410/etc), re-throw it
    if (error instanceof Response) {
      throw error;
    }

    // Otherwise, return a proper 500 error response
    throw new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  }
};

// Set cache headers for HTML pages to prevent stale content
export const headers: Route.HeadersFunction = () => {
  return {
    "Cache-Control": "public, max-age=0, must-revalidate, s-maxage=0",
  };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Search Console Verification - Replace YOUR_VERIFICATION_CODE_HERE with code from Search Console */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
        <Meta />
        <Links />
        {/* Critical CSS: Minimal above-the-fold styles to prevent FOUC and optimize LCP */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical above-the-fold styles */
              html,body{background-color:#fff;margin:0;padding:0}
              nav{background-color:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);position:sticky;top:0;z-index:50}
              .max-w-7xl{max-width:80rem;margin-left:auto;margin-right:auto}
              .px-4{padding-left:1rem;padding-right:1rem}
              .flex{display:flex}
              .items-center{align-items:center}
              .justify-between{justify-content:space-between}
              .h-16{height:4rem}
              .text-2xl{font-size:1.5rem;line-height:2rem}
              .text-xl{font-size:1.25rem;line-height:1.75rem}
              .font-bold{font-weight:700}
              .text-blue-600{color:#2563eb}
              /* Hero section styles for faster LCP rendering */
              section.bg-gradient-to-r{background:linear-gradient(to right,#2563eb,#1e40af);min-height:20rem}
              /* Trust badges section - prevent layout shift with explicit min-height */
              .bg-gray-50.py-8{background-color:#f9fafb;padding-top:2rem;padding-bottom:2rem;min-height:12rem}
              /* Font display swap for faster text rendering - handled by Google Fonts URL parameter */
              /* Hero text optimization - ensure fast rendering */
              h1{font-family:Inter,system-ui,-apple-system,sans-serif;font-display:swap}
              p{font-family:Inter,system-ui,-apple-system,sans-serif;font-display:swap}
            `,
          }}
        />
        {/* Make Google Fonts non-blocking: switch from print to all after load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Make Google Fonts non-blocking: switch from print to all after load
                var fontLink = document.querySelector('link[href*="fonts.googleapis.com"][media="print"]');
                if (fontLink) {
                  fontLink.onload = function() {
                    this.media = 'all';
                  };
                  // Fallback: switch after a short delay if onload doesn't fire
                  setTimeout(function() {
                    if (fontLink && fontLink.media === 'print') {
                      fontLink.media = 'all';
                    }
                  }, 100);
                }
              })();
            `,
          }}
        />
        {/* Global Organization Schema for Grokipedia and AI Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.speedycashhomeoffers.com/#organization",
              name: "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
              alternateName: "Speedy Cash Home Offers",
              url: "https://www.speedycashhomeoffers.com",
              logo: "https://www.speedycashhomeoffers.com/images/logo.png",
              description:
                "Las Vegas and Southern California's most trusted cash home buyers. We buy houses for cash with no fees, no repairs needed, and fast closing in 7 days. Specializing in distressed properties, foreclosures, and inherited homes.",
              foundingDate: "2015",
              founder: {
                "@type": "Person",
                "@id": "https://www.speedycashhomeoffers.com/#founder",
                name: "Dr. Janet Duffy",
                jobTitle: "Founder & CEO",
                description:
                  "With over 25 years of real estate experience, Dr. Duffy leads our team with expertise and compassion",
                url: "https://www.speedycashhomeoffers.com/meet-the-team",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "2775 Ariel Ocean St",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89156",
                addressCountry: "US",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-702-500-1981",
                  contactType: "Customer Service",
                  areaServed: ["US"],
                  availableLanguage: ["English"],
                },
                {
                  "@type": "ContactPoint",
                  email: "DrDuffy@SpeedyCashHomeOffers.com",
                  contactType: "Customer Service",
                  areaServed: ["US"],
                  availableLanguage: ["English"],
                },
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Las Vegas",
                  containedInPlace: {
                    "@type": "State",
                    name: "Nevada",
                  },
                },
                {
                  "@type": "City",
                  name: "Los Angeles",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "San Diego",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "Orange County",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "Riverside",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
                {
                  "@type": "City",
                  name: "Inland Empire",
                  containedInPlace: {
                    "@type": "State",
                    name: "California",
                  },
                },
              ],
              sameAs: [
                "https://www.facebook.com/speedycashhomeoffers",
                "https://www.linkedin.com/company/speedycashhomeoffers",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cash Home Buying Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cash Home Buying Service",
                      description: "We buy houses for cash in Las Vegas and Southern California",
                      serviceType: "Cash Home Buying",
                      provider: {
                        "@id": "https://www.speedycashhomeoffers.com/#organization",
                      },
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
                bestRating: "5",
                worstRating: "1",
              },
              award: "A+ Better Business Bureau Rating",
              knowsAbout: [
                "Cash Home Buying",
                "Real Estate Investment",
                "Distressed Property Sales",
                "Las Vegas Real Estate",
                "Southern California Real Estate",
                "Fast Home Sales",
                "As-Is Property Purchases",
              ],
            }),
          }}
        />
        {/* Knowledge Graph - Person Schema for Dr. Janet Duffy (Enhanced for E-E-A-T) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.speedycashhomeoffers.com/#founder",
              name: "Dr. Janet Duffy",
              jobTitle: "Founder & CEO",
              worksFor: {
                "@id": "https://www.speedycashhomeoffers.com/#organization",
              },
              url: "https://www.speedycashhomeoffers.com/meet-the-team",
              description:
                "With over 25 years of real estate experience, Dr. Janet Duffy is the founder and CEO of Speedy Cash Home Offers, specializing in helping homeowners sell their properties quickly for cash.",
              email: "DrDuffy@SpeedyCashHomeOffers.com",
              telephone: "+1-702-500-1981",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2775 Ariel Ocean St",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89156",
                addressCountry: "US",
              },
              knowsAbout: [
                "Real Estate",
                "Cash Home Buying",
                "Property Investment",
                "Las Vegas Real Estate Market",
                "Southern California Real Estate Market",
                "Distressed Property Sales",
                "Real Estate Transactions",
              ],
              award: "A+ Better Business Bureau Rating",
              memberOf: ["Las Vegas Chamber of Commerce", "Better Business Bureau"],
              sameAs: [
                "https://www.speedycashhomeoffers.com/about",
                "https://www.speedycashhomeoffers.com/meet-the-team",
              ],
            }),
          }}
        />
        {/* Knowledge Graph - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website",
              url: "https://www.speedycashhomeoffers.com",
              name: "Speedy Cash Home Offers",
              description:
                "Las Vegas and Southern California's most trusted cash home buyers. We buy houses for cash with no fees, no repairs needed, and fast closing in 7 days.",
              publisher: {
                "@id": "https://www.speedycashhomeoffers.com/#organization",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.speedycashhomeoffers.com/contact?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              inLanguage: "en-US",
            }),
          }}
        />
        {/* Google Analytics 4 (GA4) - Optimized for performance, deferred to prevent forced reflows */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Initialize dataLayer immediately to prevent errors
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                
                // Defer GA4 loading to prevent forced reflows during initial render
                function loadGA4() {
                  // Load gtag.js script asynchronously
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-G0GB8N5PZR';
                  script.onload = function() {
                    gtag('js', new Date());
                    gtag('config', 'G-G0GB8N5PZR', {
                      'page_path': window.location.pathname,
                      'send_page_view': true
                    });
                  };
                  document.head.appendChild(script);
                }
                
                // Use requestIdleCallback with longer timeout to reduce main thread blocking
                // Load after LCP has rendered and page is interactive
                if (window.requestIdleCallback) {
                  window.requestIdleCallback(loadGA4, { timeout: 5000 });
                } else if (document.readyState === 'complete') {
                  // If page already loaded, wait longer to avoid blocking
                  setTimeout(loadGA4, 2000);
                } else {
                  // Wait for page load, then add additional delay to avoid blocking LCP
                  window.addEventListener('load', function() {
                    setTimeout(loadGA4, 2000);
                  });
                  // Fallback: load after a longer delay if load event hasn't fired
                  setTimeout(function() {
                    if (document.readyState === 'complete' && !window.gtag) {
                      loadGA4();
                    }
                  }, 3000);
                }
                
                // Enhanced event tracking functions for GA4 (queue events if gtag not loaded)
                window.trackPhoneClick = function(label) {
                  if (window.gtag) {
                    gtag('event', 'phone_click', {
                      'event_category': 'engagement',
                      'event_label': label || 'phone_link',
                      'value': 1
                    });
                  } else {
                    window.dataLayer.push({
                      'event': 'phone_click',
                      'event_category': 'engagement',
                      'event_label': label || 'phone_link',
                      'value': 1
                    });
                  }
                };
                
                window.trackFormSubmit = function(formType) {
                  if (window.gtag) {
                    gtag('event', 'form_submit', {
                      'event_category': 'conversion',
                      'event_label': formType || 'contact_form',
                      'value': 1
                    });
                  } else {
                    window.dataLayer.push({
                      'event': 'form_submit',
                      'event_category': 'conversion',
                      'event_label': formType || 'contact_form',
                      'value': 1
                    });
                  }
                };
                
                window.trackCTAClick = function(buttonText, pageLocation) {
                  if (window.gtag) {
                    gtag('event', 'cta_click', {
                      'event_category': 'engagement',
                      'event_label': buttonText || 'cta_button',
                      'page_location': pageLocation || window.location.href
                    });
                  } else {
                    window.dataLayer.push({
                      'event': 'cta_click',
                      'event_category': 'engagement',
                      'event_label': buttonText || 'cta_button',
                      'page_location': pageLocation || window.location.href
                    });
                  }
                };
                
                window.trackPageView = function(page) {
                  if (window.gtag) {
                    gtag('config', 'G-G0GB8N5PZR', {
                      'page_path': page || window.location.pathname
                    });
                  }
                };
                
                // Expose gtag globally for compatibility
                window.gtag = gtag;
              }
            `,
          }}
        />
      </head>
      <body>
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
        <MobileCTA />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;
  let statusCode: number | undefined;

  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    if (error.status === 410) {
      message = "410 - Page Gone";
      details =
        "This page has been permanently removed. Please check the URL or return to our home page.";
    } else if (error.status === 404) {
      message = "404 - Page Not Found";
      details =
        "The requested page could not be found. Please check the URL or return to our home page.";
    } else {
      message = `Error ${error.status}`;
      details = error.statusText || details;
    }
  } else if (error && error instanceof Error) {
    // Check for JSON parsing errors specifically - be more precise
    const errorMessage = error.message || "";
    const errorStack = error.stack || "";

    // Log full error in development for debugging
    if (import.meta.env.DEV) {
      console.error("ErrorBoundary caught error:", {
        message: errorMessage,
        stack: errorStack,
        error,
      });
      stack = error.stack;
    }

    // Check for JSON/HTML parsing errors - more specific pattern
    else if (
      // Pattern 1: "Unexpected token '<', "<!DOCTYPE"..." or similar
      (errorMessage.includes("Unexpected token") &&
        (errorMessage.includes("DOCTYPE") ||
          errorMessage.includes("<html") ||
          errorMessage.includes("<!doctype"))) ||
      // Pattern 2: JSON parse error mentioning HTML/DOCTYPE
      (errorMessage.includes("JSON") &&
        errorMessage.includes("parse") &&
        (errorMessage.includes("HTML") || errorMessage.includes("DOCTYPE"))) ||
      // Pattern 3: SyntaxError related to JSON parsing
      (errorMessage.includes("SyntaxError") && errorMessage.includes("JSON"))
    ) {
      message = "Content Loading Error";
      details =
        "We encountered an issue loading content from an external source. Please try refreshing the page or contact us if the problem persists.";
      // In development, show more details
      if (import.meta.env.DEV) {
        details += ` (${errorMessage.substring(0, 100)})`;
      }
    } else {
      // For other errors, show the message but keep it user-friendly
      details = import.meta.env.DEV
        ? error.message
        : "An unexpected error occurred. Please try refreshing the page.";
      if (import.meta.env.DEV) {
        stack = error.stack;
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-6xl font-bold text-blue-600 mb-4">
          {statusCode === 410 ? "410" : statusCode === 404 ? "404" : "⚠️"}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{message}</h1>
        <p className="text-lg text-gray-600 mb-8">{details}</p>

        <div className="space-y-4">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go Home
          </a>
          <a
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors ml-4"
          >
            Contact Us
          </a>
        </div>

        {stack && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Technical Details (Development Only)
            </summary>
            <pre className="w-full p-4 overflow-x-auto bg-gray-100 rounded-lg mt-2 text-xs">
              <code>{stack}</code>
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
