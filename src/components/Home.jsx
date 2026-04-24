import { motion } from "framer-motion";

function Home() {
  return (
    <section className="home" id="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p className="intro-text">Hello, my name is</p>
        <h1>
          Wyatt <span>Chou</span>
        </h1>
        <h3>UX Research | UI Design | Front-End Development</h3>
        <p className="home-description">
         I research user behavior, translate insights into design decisions, and build experiences that actually work.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;