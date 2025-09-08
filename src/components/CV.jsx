import React, { useEffect, useState } from "react";

/**
 * CV page:
 * - Attempts to check if /cv.pdf exists via a HEAD request.
 * - If present, enables a "Download CV" button; otherwise shows disabled button + note.
 */
export default function CV() {
  const [cvAvailable, setCvAvailable] = useState(false);

  useEffect(() => {
    let canceled = false;

    // Use HEAD request to verify file existence (same-origin, no external API).
    fetch("/cv.pdf", { method: "HEAD" })
      .then((res) => {
        if (!canceled) setCvAvailable(res.ok);
      })
      .catch(() => {
        if (!canceled) setCvAvailable(false);
      });

    return () => {
      canceled = true;
    };
  }, []);

  return (
    <section className="cv">
      <h1>CV / Resume</h1>
      <p>
        You can download my CV as a PDF.
      </p>

      {cvAvailable ? (
        <a className="btn" href="/cv.pdf" download aria-label="Download CV as PDF">
          Download CV (PDF)
        </a>
      ) : (
        <button className="btn disabled" disabled aria-disabled="true">
          Download CV (PDF)
        </button>
      )}

      {!cvAvailable && (
        <p className="note" role="note">
          Note: <code>/public/cv.pdf</code> not found. Add your file to enable the button.
        </p>
      )}
    </section>
  );
}