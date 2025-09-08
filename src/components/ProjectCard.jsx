import React from "react";

/**
 * Simple presentational card for a project.
 * (Prop drilling only one level deep from Projects -> ProjectCard)
 */
export default function ProjectCard({ project }) {
  const { title, description, tags, github } = project;
  return (
    <article className="project-card">
      <h2 className="project-title">{title}</h2>
      <p className="project-desc">{description}</p>
      <ul className="pill-list" role="list" aria-label="Tech stack">
        {tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <a
        className="btn btn-ghost"
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open GitHub repository for ${title} (opens in new tab)`}
      >
        View on GitHub
      </a>
    </article>
  );
}