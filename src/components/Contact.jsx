import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      setSuccess("");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Thank you! Your message has been received.");
    setFormData({ name: "", email: "", message: "" });
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{success}</p>}

          <button type="submit">Send Message</button>
        </form>

        <div className="social-links">
          <a href="mailto:chouwyatt@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/Wyattchou" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/wyatt-chou-313258289/" target="_blank"><FaLinkedin /></a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;