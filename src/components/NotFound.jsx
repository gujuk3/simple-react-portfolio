import React from "react";

export default function NotFound({ badHash }) {
  return (
    <section className="not-found">
      <h1>404 — Page Not Found</h1>
      {badHash && (
        <p>
          We couldn’t match the route <code>{badHash}</code>.
        </p>
      )}
      <p>
        Try going back to <a href="#/">Home</a>.
      </p>
    </section>
  );
}