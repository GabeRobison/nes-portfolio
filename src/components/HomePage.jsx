import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/HomePage.module.css";
import headshot from "../assets/headshot.png";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <section id="about" className={`nes-container ${styles.aboutSection}`}>
        <div className={styles.aboutContent}>
          <div className={styles.profileLayout}>
            <div className={styles.textContent}>
              <h1 className={`nes-text is-primary ${styles.greeting}`}>
                <span className={styles.waveEmoji}>👋</span> Hi, I'm Gabe!
              </h1>

              <div className={styles.description}>
                <p>
                  A software engineer with a love for web design and
                  development.
                </p>
                <p>
                  I'm currently a Computer Science student at the University of
                  Minnesota and an incoming software engineering intern @ 3M.
                </p>
              </div>
            </div>

            <div className={styles.headshotContainer}>
              <div className={styles.pixelCircle}>
                <img
                  src={headshot}
                  alt="Gabe Robison"
                  className={styles.headshot}
                />
                <div className={styles.pixelBorder}></div>
              </div>
            </div>
          </div>

          <div className={styles.projectsButtonContainer}>
            <Link to="/projects" className={styles.projectsButton}>
              <button
                type="button"
                aria-label="View projects"
                className={`nes-btn ${styles.pixelButton} pixel-bounce`}
              >
                Check out some of my projects
              </button>
            </Link>
          </div>

          <div className={styles.skillsContainer}>
            <h2 className={styles.skillsHeading}>Skills</h2>
            <div className={styles.skillsSection}>
              <div className={styles.skillCategory}>
                <h3 className={styles.categoryHeading}>Languages</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skillItem}>JavaScript</span>
                  <span className={styles.skillItem}>TypeScript</span>
                  <span className={styles.skillItem}>HTML/CSS</span>
                  <span className={styles.skillItem}>C/C++</span>
                  <span className={styles.skillItem}>Rust</span>
                  <span className={styles.skillItem}>SQL</span>
                  <span className={styles.skillItem}>Java</span>
                  <span className={styles.skillItem}>Python</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3 className={styles.categoryHeading}>Technologies</h3>
                <div className={styles.skillsList}>
                  <span className={styles.skillItem}>Next.js</span>
                  <span className={styles.skillItem}>React</span>
                  <span className={styles.skillItem}>Flask</span>
                  <span className={styles.skillItem}>Chart.js</span>
                  <span className={styles.skillItem}>NLP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
