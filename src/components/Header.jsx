import React from "react";

/**
 * Header with site title, navigation links, and a prominent GitHub link.
 * - Uses aria-current="page" for the active route.
 */
export default function Header({ currentPath }) {
  const NavLink = ({ to, children, matchPrefix = false }) => {
    const isActive = matchPrefix
      ? currentPath.startsWith(to.replace("#", ""))
      : currentPath === to.replace("#", "");
    return (
      <a
        href={to}
        aria-current={isActive ? "page" : undefined}
        className={isActive ? "nav-link active" : "nav-link"}
      >
        {children}
      </a>
    );
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#/" aria-label="Go to home">
          {/* Simple logotype */}
          <span className="brand-mark" aria-hidden="true">◆</span>
          <span className="brand-text">Ahmet Serdar Turan</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <NavLink to="#/about"     >About</NavLink>
          <NavLink to="#/cv"        >CV</NavLink>
          <NavLink to="#/projects"  >Projects</NavLink>
          <NavLink to="#/contact"   >Contact</NavLink>
          <NavLink to="#/blog" matchPrefix={true}>Blog</NavLink>
        </nav>

        <a
          className="github-link"
          href="https://github.com/gujuk3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile (opens in new tab)"
          title="GitHub"
        >
          {/* Inline SVG icon for GitHub */}
          <svg
            className="github-icon"
            viewBox="0 0 16 16"
            width="24"
            height="24"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.63 5.47 7.7.4.08.55-.18.55-.39
                 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.5-2.69-.96-.09-.24-.48-.96-.82-1.15-.28-.15-.68-.52-.01-.53.63-.01
                 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.53.28-.87.51-1.07-1.78-.2-3.64-.91-3.64-4.06
                 0-.9.31-1.64.82-2.22-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.85.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.07
                 2.2-.85 2.2-.85.44 1.1.16 1.92.08 2.12.51.58.82 1.32.82 2.22 0 3.16-1.87 3.86-3.65 4.06.29.25.54.74.54 1.49
                 0 1.07-.01 1.93-.01 2.19 0 .21.15.47.55.39A8.04 8.04 0 0 0 16 8.13C16 3.64 12.42 0 8 0z"
            />
          </svg>
          <span className="github-text">GitHub</span>
        </a>
        <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/ahmet-serdar-turan-1a0536171"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile (opens in new tab)"
            title="LinkedIn"
        >
          <svg
              className="linkedin-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              aria-hidden="true"
          >
            <path
                fill="currentColor"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5
         5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11
         19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75
         1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75
         1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867
         0-2.154 1.459-2.154 2.967v5.696h-3v-10h2.885v1.367h.041c.402-.761
         1.385-1.563 2.85-1.563 3.048 0 3.608 2.007 3.608
         4.619v5.577z"
            />
          </svg>
          <span className="linkedin-text">LinkedIn</span>
        </a>
      </div>
    </header>
  );
}