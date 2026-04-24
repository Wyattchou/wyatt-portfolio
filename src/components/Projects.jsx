import { motion } from "framer-motion";
import survey from "../assets/surveyform.jpg";
import prize from "../assets/PrizeKicks.jpg";
import report from "../assets/ReportPicture.jpg";
import review from "../assets/review.jpg";
import sixseven from "../assets/sixseven.jpg";

const projects = [
  {
    title: "Survey Form",
    desc: "A functional survey form with validation and dynamic feedback.",
    img: survey,
    link: "https://students.gaim.ucf.edu/~wy190358/dig3716c/assignment2/survey.html"
  },
  {
    title: "PrizeKicks Shoe App",
    desc: "UX/UI prototype focused on simplifying shoe discovery.",
    img: prize,
    link: "https://www.figma.com/proto/g1FkQt3tQyQ1Gdxgk2Nc4s/PrizeKicks-Hi-fidelity-Wireframe"
  },
  {
    title: "UX Case Study",
    desc: "Research-driven UX case study for PrizeKicks.",
    img: report,
    link: "https://docs.google.com/document/d/1V3x0ltTuR5CWEiImp74WDQC_mwC-aSvKg12nnNBdP5I/edit"
  },
  {
    title: "CMS Review System",
    desc: "Backend system with user roles and CRUD functionality.",
    img: review,
    link: "https://students.gaim.ucf.edu/~wy190358/dig3134c/assignments/assignment04/login.php"
  },
  {
    title: "SixSeven Documentary",
    desc: "A project exploring YouTube’s evolution through production.",
    img: sixseven,
    link: "https://docs.google.com/document/d/1q9EMDw3Avt2A926N5WDv6vlDTna2cxksk0F8ky2HUc0/edit"
  }
];

function Projects() {
  return (
    <section className="section dark" id="projects">
      <motion.div
        className="section-content column"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Projects</h2>
        <h5>My Recent Work</h5>

        <div className="projects-grid">
          {projects.map((p, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
            >
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" className="btn">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;