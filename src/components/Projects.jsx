import React from "react";
import ProjectCard from "./ProjectCard.jsx";

/**
 * Hard-coded projects (edit freely).
 * Each: { title, description, tags[], github }
 */
const PROJECTS = [
  {
    title: "Personal Portfolio (This Site)",
    description:
      "A simple React single-page site with a tiny hash router, built without any UI libraries. Clean CSS and accessible markup.",
    tags: ["React", "Vite", "CSS", "Accessibility"],
    github: "https://github.com/gujuk3/simple-react-portfolio",
  },
  {
    title: "Text Based RPG Game",
    description:
        "A text based RPG game with a map and multiple actions. Built purely with Java and JavaFX.",
    tags: ["Java", "JavaFX", "OOP", "Game"],
    github: "https://github.com/gujuk3/OOP_Game_Project",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <p>Here are a few small projects I built while learning front-end development.</p>
      <div className="project-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}