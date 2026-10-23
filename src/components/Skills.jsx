import { motion, useReducedMotion } from "framer-motion";

const skills = [
  {
    category: "UX Research",
    items: ["User Interviews", "Usability Testing", "Survey Design", "Research Synthesis", "UX Auditing", "Maze"]
  },
  {
    category: "UX/UI Design",
    items: ["Figma & FigJam", "Wireframing", "Prototyping", "User Flows", "Information Architecture", "Interaction Design"]
  },
  {
    category: "Development",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "PHP", "MySQL"]
  },
  {
    category: "Tools & Accessibility",
    items: ["Adobe Creative Suite", "Git & GitHub", "NVDA Screen Reader", "axe DevTools", "TestFlight", "Google Forms"]
  }
];

function Skills() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="section" id="skills">
      <motion.div
        className="section-content column"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
      >
        <h2>Skills</h2>
        <p className="section-subtitle">Methods and tools I bring to the work.</p>

        <div className="skill-categories">
          {skills.map(({ category, items }) => (
            <section className="skill-category" key={category} aria-label={category}>
              <h3>{category}</h3>
              <ul className="skills-grid">
                {items.map((skill) => <li className="skill-pill" key={skill}>{skill}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
