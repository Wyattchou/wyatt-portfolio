import { motion, useReducedMotion } from "framer-motion";

function Home() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="home" id="home">
      <motion.div
        className="home-content"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.9 }}
      >
        <p className="intro-text">UX Research &amp; Product Design</p>
        <h1>
          Wyatt <span>Chou</span>
        </h1>
        <p className="home-tagline">From user insight to thoughtful interfaces.</p>
        <p className="home-description">
          I’m a UX researcher and designer with the technical skills to bring ideas into working interfaces.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn">View Selected Work</a>
          <a
            href={`${import.meta.env.BASE_URL}Wyatt-Chou-Resume-2026.pdf`}
            className="btn secondary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a href="#contact" className="text-link">Get in touch <span aria-hidden="true">→</span></a>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
