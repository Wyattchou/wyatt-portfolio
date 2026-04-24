import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "PHP",
  "MySQL",
  "Responsive Design",
  "UX/UI Design",
  "Figma",
  "Adobe Creative Suite",
  "User Interviews",
  "Usability Testing",
  "User Flows",
  "Wireframing and Prototyping",
  "Git & GitHub"
];

function Skills() {
  return (
    <section className="section" id="skills">
      <motion.div
        className="section-content column"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Skills</h2>
        <h5>My Expertise</h5>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-pill" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;