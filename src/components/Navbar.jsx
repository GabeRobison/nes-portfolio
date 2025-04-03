import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.titleLink}>
        <h1>Gabe Robison</h1>
      </Link>

      <ul>
        <li className="pixel-bounce">
          <Link to="/">🏠 Home</Link>
        </li>
        <li className="pixel-bounce">
          <Link to="/projects">📂 Projects</Link>
        </li>
        <li className="pixel-bounce">
          <a href="#contact">📬 Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
