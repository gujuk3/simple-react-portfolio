import React, { useEffect, useState } from "react";
import { getRoute, subscribe } from "./router.js";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import CV from "./components/CV.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";       // kept simple: imported normally
import NotFound from "./components/NotFound.jsx";

/**
 * App: simple single-file SPA shell.
 * - Listens to hash changes via a tiny router.
 * - Renders the view matching the current route.
 */
export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    // Subscribe to hash changes (tiny router)
    const unsub = subscribe((r) => setRoute(r));
    return () => unsub();
  }, []);

  const currentPath = route.path; // e.g., "/", "/about", "/blog", "/blog/:slug"
  const params = route.params || {};

  let View = null;
  switch (true) {
    case currentPath === "/":
      View = <Home />;
      break;
    case currentPath === "/about":
      View = <About />;
      break;
    case currentPath === "/cv":
      View = <CV />;
      break;
    case currentPath === "/projects":
      View = <Projects />;
      break;
    case currentPath === "/contact":
      View = <Contact />;
      break;
    case currentPath === "/blog":
    case currentPath === "/blog/:slug":
      View = <Blog slug={params.slug || null} />;
      break;
    default:
      View = <NotFound badHash={route.raw} />;
      break;
  }

  return (
    <div className="site">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header currentPath={currentPath} />
      <main id="main" className="container" tabIndex="-1">
        {View}
      </main>
      <Footer />
    </div>
  );
}