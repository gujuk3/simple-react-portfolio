import React from "react";

/**
 * Very simple static blog:
 * - List at "#/blog"
 * - Detail at "#/blog/:slug"
 */
const POSTS = [
  {
    slug: "blog-1",
    title: "Blog #1",
    date: "2025-01-01",
    paragraphs: [
      "Test",
      "Test 1"
    ]
  }
];

export default function Blog({ slug }) {
  if (!slug) {
    // List view
    return (
      <section className="blog">
        <h1>Blog</h1>
        <ul className="blog-list" role="list">
          {POSTS.map((p) => (
            <li key={p.slug} className="blog-item">
              <h2 className="blog-item-title">
                <a href={`#/blog/${p.slug}`}>{p.title}</a>
              </h2>
              <time className="blog-date" dateTime={p.date}>{p.date}</time>
              <p className="blog-excerpt">
                {p.paragraphs[0]}
              </p>
              <a className="btn btn-ghost" href={`#/blog/${p.slug}`}>Read more</a>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  const post = POSTS.find((p) => p.slug === slug);
  if (!post) {
    return (
      <section className="blog">
        <h1>Blog</h1>
        <p>Post not found.</p>
        <a className="btn btn-ghost" href="#/blog">Back to blog</a>
      </section>
    );
  }

  return (
    <article className="blog-post">
      <a className="back-link" href="#/blog">← Back to blog</a>
      <h1>{post.title}</h1>
      <time className="blog-date" dateTime={post.date}>{post.date}</time>
      {post.paragraphs.map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}
    </article>
  );
}