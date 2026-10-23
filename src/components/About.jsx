import { motion, useReducedMotion } from "framer-motion";
import profile from "../assets/me.JPG";

function About() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="section" id="about">
      <motion.div
        className="section-content"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
      >
        <img src={profile} alt="Wyatt Chou" className="about-img" loading="lazy" decoding="async" />

        <div className="text">
          <h2>About Me</h2>
          <p className="section-subtitle">Research, design, and the ability to build.</p>
          <p>
            My experience spans UX research and UX/UI internship work at Escape, alongside design and development projects at UCF. I’m interested in how people understand an interface, where they lose their way, and what research can tell us about the next design decision.
          </p>
          <p>
            At Escape, I contributed to exploratory research, designed a task-based usability flow, and evaluated beta builds. My front-end development skills help me connect interface decisions with how an experience is built.
          </p>
          <p>
            I’m interested in opportunities in UX research and product design, bringing a perspective that connects asking questions, shaping interfaces, and building for the web.
          </p>

          <a href="#contact" className="btn">Let’s Talk</a>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
