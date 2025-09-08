import React, { useState } from "react";

/**
 * Contact page:
 * - Nonfunctional form with client-side validation only.
 * - On valid submit: show a mailto link with subject/body prefilled.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [readyToEmail, setReadyToEmail] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) e.message = "Please enter a message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(ev) {
    const { name, value } = ev.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (validate()) {
      setReadyToEmail(true);
      // We do NOT send anything (no backend). We just reveal the mailto link below.
    }
  }

  // Build a mailto link with subject and body prefilled
  const subject = encodeURIComponent("Website Contact");
  const body = encodeURIComponent(
    `Hi, my name is ${form.name}.\n\n${form.message}\n\nReply to: ${form.email}`
  );
  const mailHref = `mailto:serdar3turan@gmail.com?subject=${subject}&body=${body}`;

  return (
    <section className="contact">
      <h1>Contact</h1>
      <p>
        This form only validates on the client. It does not send anything. After successful
        validation, you’ll get a button to email me using your default mail app.
      </p>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-err" : undefined}
            required
          />
          {errors.name && (
            <div id="name-err" className="error" role="alert">{errors.name}</div>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-err" : undefined}
            required
          />
          {errors.email && (
            <div id="email-err" className="error" role="alert">{errors.email}</div>
          )}
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-err" : undefined}
            required
          />
          {errors.message && (
            <div id="message-err" className="error" role="alert">{errors.message}</div>
          )}
        </div>

        <button className="btn" type="submit">Validate</button>
      </form>

      {readyToEmail && (
        <div className="email-ready">
          <p className="success" role="status">
            Message prepared; please email me via the button below.
          </p>
          <a className="btn" href={mailHref}>Open email app</a>
        </div>
      )}

      <hr className="sep" />

      <p>
        Prefer direct email? You can always reach me at{" "}
        <a href="mailto:serdar3turan@gmail.com">serdar3turan@gmail.com</a>.
      </p>
    </section>
  );
}