import React from "react";
/*
<a
          className="footer-github"
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile (opens in new tab)"
        >
          GitHub
        </a>
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <small>© {2025} Ahmet Serdar Turan. All rights reserved.</small>

      </div>
    </footer>
  );
}