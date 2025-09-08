/**
 * Very small hash router:
 * - getRoute(): reads location.hash and returns { path, params, raw }
 * - subscribe(cb): calls cb on hashchange and returns an unsubscribe function
 *
 * Supported paths:
 *   "#/"               -> path "/"
 *   "#/about"          -> path "/about"
 *   "#/cv"             -> path "/cv"
 *   "#/projects"       -> path "/projects"
 *   "#/contact"        -> path "/contact"
 *   "#/blog"           -> path "/blog"
 *   "#/blog/:slug"     -> path "/blog/:slug" with params.slug
 * Any unknown hash -> path "404" (handled in App switch)
 */

function normalizeHash(h) {
  if (!h || h === "#") return "#/";
  return h;
}

function parseRouteFromHash(hash) {
  const raw = normalizeHash(hash);
  // Remove leading "#"
  const withoutHash = raw.startsWith("#") ? raw.slice(1) : raw;
  // Ensure it starts with "/"
  const cleaned = withoutHash.startsWith("/") ? withoutHash : `/${withoutHash}`;

  // Split by "/"
  const parts = cleaned.split("/").filter(Boolean); // e.g., ["blog", "my-post"]
  // No parts => "/"
  if (parts.length === 0) return { path: "/", params: {}, raw };

  const [first, second] = parts;

  // Handle simple static routes
  if (parts.length === 1) {
    switch (first) {
      case "":
        return { path: "/", params: {}, raw };
      case "about":
        return { path: "/about", params: {}, raw };
      case "cv":
        return { path: "/cv", params: {}, raw };
      case "projects":
        return { path: "/projects", params: {}, raw };
      case "contact":
        return { path: "/contact", params: {}, raw };
      case "blog":
        return { path: "/blog", params: {}, raw };
      default:
        return { path: "404", params: {}, raw };
    }
  }

  // Handle blog slugs: "/blog/:slug"
  if (first === "blog" && parts.length === 2) {
    return { path: "/blog/:slug", params: { slug: second }, raw };
  }

  // Unknown
  return { path: "404", params: {}, raw };
}

export function getRoute() {
  // If no hash, set default to "#/"
  if (!location.hash || location.hash === "#") {
    // This will also trigger a 'hashchange' event in some browsers.
    // It's fine; subscribe will normalize accordingly.
    location.hash = "#/";
  }
  return parseRouteFromHash(location.hash);
}

export function subscribe(onRouteChange) {
  function handler() {
    onRouteChange(getRoute());
  }
  window.addEventListener("hashchange", handler);
  // Call once immediately so components can react on initial load
  // (Some pages may rely on params like slug.)
  onRouteChange(getRoute());
  return () => window.removeEventListener("hashchange", handler);
}