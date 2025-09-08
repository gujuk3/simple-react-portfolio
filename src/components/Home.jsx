import React, { useEffect, useState } from "react";

/**
 * Home page:
 * - Portrait (from /public/avatar.jpg if available; otherwise fallback circle)
 * - Name, role, short bio
 * - Simple skills list
 */
export default function Home() {
  const [avatarOk, setAvatarOk] = useState(true);

  useEffect(() => {
    // Check if avatar exists using Image() without fetch APIs
    const img = new Image();
    img.onload = () => setAvatarOk(true);
    img.onerror = () => setAvatarOk(false);
    img.src = "/avatar.jpg"; // Vite serves /public at root
  }, []);

  return (
    <section className="home">
      <div className="hero">
        {avatarOk ? (
          <img
            className="avatar"
            src="/avatar.jpg"
            alt="Portrait of Your Name"
            width="160"
            height="160"
          />
        ) : (
          <div className="avatar-fallback" aria-hidden="true">YN</div>
        )}

        <div className="hero-text">
          <h1 className="title">Ahmet Serdar Turan</h1>
          <p className="subtitle">Junior Developer</p>
          {!avatarOk && (
            <p className="note" role="note">
              Note: <code>/public/avatar.jpg</code> not found — showing a placeholder.
            </p>
          )}
          <p className="bio">
            I am a senior Computer Engineering student at Istanbul Rumeli University. I am highly interested in machine
            learning and would prefer to work in a related field.
          </p>
          <a className="cta" href="#/projects">See my projects</a>
        </div>
      </div>

      <section className="skills">
        <h2>Core Skills</h2>
        <ul className="pill-list" role="list">
          <li>Object Oriented Programming</li>
          <li>Data Structures and Algorithms</li>
          <li>Machine Learning Algorithms and Applications</li>
          <li>Software Development</li>
        </ul>
      </section>
    </section>
  );
}