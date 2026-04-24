import { motion } from "framer-motion";
import profile from "../assets/me.JPG";

function About() {
  return (
    <section className="section" id="about">
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={profile} alt="Wyatt" className="about-img" />

        <div className="text">
          <h2>About Me</h2>
          <h5>
             <span> Designer | Developer | Researcher</span>
          </h5> 

          <p>
            I’m a UX/UI Designer and Web Developer with a strong focus on UX Research. I specialize in understanding user behavior, identifying pain points, and translating insights into intuitive, accessible digital experiences.

Through user interviews, usability testing, and data-driven design, I aim to create products that not only look good but genuinely improve how people interact with technology.

I bring a hybrid skill set that bridges research, design, and development allowing me to take ideas from insight to implementation.
          </p>

          <a href="#contact" className="btn">Let’s Talk</a>
        </div>
      </motion.div>
    </section>
  );
}

export default About;