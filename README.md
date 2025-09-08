# Simple React Personal Website (Beginner-Friendly)

A minimal personal website built with **React + ReactDOM** and **Vite**.  
No backend, no databases, no UI libraries, no routing libraries.  
Hash-based SPA with accessible, clean CSS.

---

## Project Structure

```
project-root/
  index.html
  /public
    avatar.jpg        (optional placeholder portrait)
    cv.pdf            (optional CV PDF)
  /src
    main.jsx
    App.jsx
    router.js
    /components
      Header.jsx
      Footer.jsx
      Home.jsx
      About.jsx
      CV.jsx
      Projects.jsx
      ProjectCard.jsx
      Contact.jsx
      Blog.jsx
      NotFound.jsx
    styles.css
  package.json
  vite.config.js
  README.md
```

---

## Open in WebStorm (Recommended)

1. **WebStorm → New Project from Existing Files…**
2. Choose the project folder you created with the files above.
3. When the project opens, **open the built-in Terminal** (bottom tool window).

---

## Install

In the terminal:

```bash
npm install
```

This installs only `react`, `react-dom`, and the dev tool `vite`.

---

## Run (Development)

```bash
npm run dev
```

- Vite prints a local URL like `http://localhost:5173/`.
- **WebStorm tip:** Use *Open in Browser* from the top-right or right-click `index.html` and choose your browser.

---

## Build (Production)

```bash
npm run build
```

- Output goes to the **`dist/`** folder as plain static assets.

### Preview the Build

Option A (Vite):
```bash
npm run preview
```

Option B (WebStorm static preview):
- Right-click `dist/index.html` → **Open in Browser**.

---

## Deploy

Copy the `dist/` folder to **any static host** (GitHub Pages, Netlify, Vercel static, simple FTP, etc.).

**WebStorm Deployment:**  
`Tools → Deployment → Configuration…` add your server, then **Upload to…** to push `dist/`.

---

## Notes

- Put your portrait at `public/avatar.jpg`. If missing, the Home page shows a fallback.
- Put your CV at `public/cv.pdf`. If missing, the CV “Download” button is disabled and a note is shown.
- Update **GitHub links** (`your-github`) and page text to your own info.
- Keep it simple: only `useState` and `useEffect` are used. No advanced patterns.

Happy hacking!