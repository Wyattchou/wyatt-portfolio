import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MotionConfig } from "framer-motion";
import "./App.css";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Home />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
