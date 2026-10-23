import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main navigation" onKeyDown={(event) => {
      if (event.key === "Escape" && menuOpen) {
        closeMenu();
        menuButton.current?.focus();
      }
    }}>
      <a className="logo" href="#home" aria-label="Wyatt Chou, home" onClick={closeMenu}>
        Wyatt <span>Chou</span>
      </a>

      <button ref={menuButton} type="button" className="menu-btn" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>

      <ul id="primary-navigation" className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#projects" onClick={closeMenu}>Selected Work</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
