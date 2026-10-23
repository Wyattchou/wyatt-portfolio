import { motion, useReducedMotion } from "framer-motion";
import survey from "../assets/surveyform.jpg";
import prize from "../assets/PrizeKicks.jpg";
import review from "../assets/review.jpg";
import sixseven from "../assets/sixseven.jpg";
import escape from "../assets/escape.png";

const selectedProjects = [
  {
    title: "Escape App",
    category: "Internship · UX Research",
    description: "Research, beta-build evaluation, and a plan for collecting more useful feedback in an AI wellness experience.",
    image: escape,
    imageTone: "light",
    links: [{ label: "Read Case Study", href: `${import.meta.env.BASE_URL}escape-case-study/index.html` }]
  },
  {
    title: "PrizeKicks",
    category: "UX/UI Design · Coursework",
    description: "A shoe-shopping concept exploring simpler discovery through UX research and an interactive prototype.",
    image: prize,
    links: [
      { label: "Read Case Study", href: "https://docs.google.com/document/d/1V3x0ltTuR5CWEiImp74WDQC_mwC-aSvKg12nnNBdP5I/edit", external: true },
      { label: "View Prototype", href: "https://www.figma.com/proto/g1FkQt3tQyQ1Gdxgk2Nc4s/PrizeKicks-Hi-fidelity-Wireframe", external: true }
    ]
  }
];

const additionalProjects = [
  {
    title: "CMS Review System",
    category: "Web Development",
    description: "A backend project with user roles and tools to create, read, update, and delete reviews.",
    image: review,
    links: [{ label: "View Live Project", href: "https://students.gaim.ucf.edu/~wy190358/dig3134c/assignments/assignment04/login.php", external: true }]
  },
  {
    title: "Survey Form",
    category: "Front-End Development",
    description: "A functional survey form with input validation and dynamic feedback.",
    image: survey,
    links: [{ label: "View Live Project", href: "https://students.gaim.ucf.edu/~wy190358/dig3716c/assignment2/survey.html", external: true }]
  },
  {
    title: "SixSeven Documentary",
    category: "Media Production",
    description: "A production project exploring the evolution of YouTube.",
    image: sixseven,
    links: [{ label: "View Project", href: "https://docs.google.com/document/d/1q9EMDw3Avt2A926N5WDv6vlDTna2cxksk0F8ky2HUc0/edit", external: true }]
  }
];

function ProjectCard({ project, heading: Heading = "h3" }) {
  return (
    <article className="project-card">
      <img src={project.image} className={project.imageTone === "light" ? "project-image-light" : undefined} alt={`${project.title} project preview`} loading="lazy" decoding="async" />
      <div className="project-copy">
        <p className="project-category">{project.category}</p>
        <Heading>{project.title}</Heading>
        <p className="project-description">{project.description}</p>
        <div className="project-actions">
          {project.links.map((link, index) => (
            <a key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} className={index === 0 ? "btn" : "btn secondary-btn"}>
              {link.label}<span className="sr-only">: {project.title}{link.external ? " (opens in a new tab)" : ""}</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="section dark" id="projects" aria-labelledby="projects-title">
      <motion.div className="section-content column" initial={shouldReduceMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}>
        <h2 id="projects-title">Selected Work</h2>
        <p className="section-subtitle">Research and design projects, from questions to interfaces.</p>
        <div className="projects-grid selected-projects">
          {selectedProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
        <section className="additional-work" aria-labelledby="additional-work-title">
          <h3 id="additional-work-title">Additional Work</h3>
          <p className="section-subtitle">Development and production projects that round out my practice.</p>
          <div className="projects-grid additional-projects">
            {additionalProjects.map((project) => <ProjectCard key={project.title} project={project} heading="h4" />)}
          </div>
        </section>
      </motion.div>
    </section>
  );
}

export default Projects;
