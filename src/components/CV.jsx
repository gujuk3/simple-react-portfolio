import React, { useEffect, useState } from "react";

/**
 * CV page:
 * - Checks if /cv.pdf exists.
 * - If present, shows both a Download button and an inline PDF viewer.
 * - If not found, shows disabled button + note.
 */
export default function CV() {
    const [cvAvailable, setCvAvailable] = useState(false);

    useEffect(() => {
        let canceled = false;

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
                You can view my CV below. Additionally, you could download my CV as a PDF page if you wish.
            </p>

            {cvAvailable ? (
                <>
                    {/* Download button */}
                    <a className="btn" href="/cv.pdf" download aria-label="Download CV as PDF">
                        Download CV (PDF)
                    </a>

                    {/* Inline PDF viewer */}
                    <div className="pdf-viewer">
                        <object
                            data="/cv.pdf"
                            type="application/pdf"
                            width="100%"
                            height="800px"
                            aria-label="CV PDF viewer"
                        >
                            <p>
                                Your browser doesn’t support inline PDFs. You can{" "}
                                <a href="/cv.pdf" download>download the CV here</a>.
                            </p>
                        </object>
                    </div>
                </>
            ) : (
                <>
                    <button className="btn disabled" disabled aria-disabled="true">
                        Download CV (PDF)
                    </button>
                    <p className="note" role="note">
                        Note: <code>/public/cv.pdf</code> not found. Add your file to enable the button and viewer.
                    </p>
                </>
            )}
        </section>
    );
}
