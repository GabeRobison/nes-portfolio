import React from "react";
import styles from "./styles/Footer.module.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles.footer}
    >
      <div id="contact" className={styles.links}>
        <span>
          <i className="nes-icon linkedin is-small"></i>
        </span>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/gaberobison/"
          className="pixel-hover"
        >
          LinkedIn
        </a>
        <span>
          <i className="nes-icon github is-small"></i>
        </span>
        <a
          target="_blank"
          href="https://github.com/GabeRobison"
          className="pixel-hover"
        >
          GitHub
        </a>
        <span>
          <i className="nes-icon gmail is-small"></i>
        </span>
        <a href="mailto:gaberobison@gmail.com" className="pixel-hover">
          Email
        </a>
      </div>
      <motion.p
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        © {new Date().getFullYear()} Gabe Robison
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
