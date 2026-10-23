import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FORM_ENDPOINT = "https://formspree.io/f/mwllegqj";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionInProgress = useRef(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
    setSuccess("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submissionInProgress.current) return;

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      _gotcha: new FormData(e.currentTarget).get("_gotcha") || ""
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError("Please fill out all fields.");
      setSuccess("");
      return;
    }

    submissionInProgress.current = true;
    setIsSubmitting(true);
    setError("");
    setSuccess("");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || result?.ok !== true) {
        const messages = Array.isArray(result?.errors)
          ? result.errors.map((issue) => issue?.message).filter((message) => typeof message === "string").join(" ")
          : "";
        throw new Error(response.status === 429
          ? "Too many messages. Please wait a few minutes or email me directly."
          : messages || "Your message couldn't be sent. Please try again or email me directly.");
      }

      setSuccess("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.name === "AbortError"
        ? "The request timed out. Your message may not have been sent. Please try again or email me directly."
        : err instanceof TypeError
          ? "Couldn't connect to the message service. Please try again or email me directly."
          : err.message);
    } finally {
      clearTimeout(timeout);
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section dark" id="contact">
      <motion.div
        className="section-content column"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact</h2>
        <h5>Get In Touch</h5>

        <form className="contact-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
          <label className="sr-only" htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            required
            disabled={isSubmitting}
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <label className="sr-only" htmlFor="contact-email">Your email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            disabled={isSubmitting}
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="sr-only" htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            name="message"
            required
            disabled={isSubmitting}
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <input type="text" name="_gotcha" className="contact-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="form-feedback">
            <p className="form-error" role="alert">{error}</p>
            <p className="form-success" role="status">{success}</p>
          </div>

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send Message"}
          </button>
        </form>
        <p className="contact-alternative">Prefer email? <a href="mailto:chouwyatt@gmail.com">chouwyatt@gmail.com</a></p>

        <div className="social-links">
          <a href="mailto:chouwyatt@gmail.com" aria-label="Email Wyatt Chou"><FaEnvelope /></a>
          <a href="https://github.com/Wyattchou" target="_blank" rel="noopener noreferrer" aria-label="Wyatt Chou on GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/wyatt-chou-313258289/" target="_blank" rel="noopener noreferrer" aria-label="Wyatt Chou on LinkedIn"><FaLinkedin /></a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
