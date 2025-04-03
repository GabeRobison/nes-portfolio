import styles from "./styles/Portfolio.module.css";

import wikiBrief from "../assets/wikiBrief.gif";
import marrowMoney from "../assets/marrowMoney.gif";
import doomMeter from "../assets/doomMeter.gif";
import marrowLogo from "../assets/marrowLogo.png";

const PortfolioProjects = () => {
  return (
    <div className={styles.container}>
      <section id="projects">
        <h2 className="nes-text is-primary">My Projects</h2>

        <div className={`${styles.project} ${styles.projectCard}`}>
          <div className={styles.clickMeDiv}>
            <a
              href="https://www.marrowmn.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={marrowLogo}
                alt="Marrow Logo"
                className={styles.marrowLogo}
              />
            </a>
          </div>
          <div className={styles.projectContent}>
            <h3>Marrow Money</h3>
            <div className={styles.marrowDiv}>
              <p>
                A restaurant-focused financial tracking tool that streamlines
                expense and income monitoring!
              </p>
            </div>
            <div className={styles.projectPreview}>
              <div className={styles.imageContainer}>
                <img
                  src={marrowMoney}
                  alt="Marrow Money Screenshot"
                  className={styles.projectImage}
                />
                <div className={styles.imageOverlay}>
                  <p>
                    Developed as an in-house solution for a restaurant, Marrow
                    Money integrates with Plaid to track income, categorize
                    expenses, and visualize financial trends for better business
                    management.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.techList}>
              <span className={styles.techItem}>Next.js</span>
              <span className={styles.techItem}>Plaid API</span>
              <span className={styles.techItem}>Appwrite</span>
              <span className={styles.techItem}>Chart.js</span>
            </div>
          </div>
        </div>

        <div className={`${styles.project} ${styles.projectCard}`}>
          <div className={styles.projectContent}>
            <a
              href="https://github.com/GabeRobison/wiki-brief"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <h3>WikiBrief</h3>
            </a>
            <p>
              A Wikipedia summarizer that creates concise, readable summaries!
            </p>

            <a
              href="https://github.com/GabeRobison/wiki-brief"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className={styles.projectPreview}>
                <div className={styles.imageContainer}>
                  <img
                    src={wikiBrief}
                    alt="WikiBrief Screenshot"
                    className={styles.projectImage}
                  />

                  <div className={styles.imageOverlay}>
                    <p>
                      WikiBrief transforms lengthy Wikipedia articles into
                      concise, easy-to-digest summaries while preserving key
                      information.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <div className={styles.techList}>
              <span className={styles.techItem}>Rust</span>
              <span className={styles.techItem}>React</span>
              <span className={styles.techItem}>Statistical NLP</span>
            </div>
          </div>
        </div>

        <div className={`${styles.project} ${styles.projectCard}`}>
          <div className={styles.projectContent}>
            <a
              href="https://github.com/GabeRobison/doom-meter"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <h3>DOOM Meter</h3>
            </a>
            <p>
              A Chrome extension that analyzes webpage sentiment and detects
              negativity!
            </p>

            <a
              href="https://github.com/GabeRobison/doom-meter"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className={styles.projectPreview}>
                <div className={styles.imageContainer}>
                  <img
                    src={doomMeter}
                    alt="DOOM Meter Screenshot"
                    className={styles.projectImage}
                  />
                  <div className={styles.imageOverlay}>
                    <p>
                      DOOM Meter analyzes content sentiment and calculates a
                      doom score, providing an engaging way to avoid negativity.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <div className={styles.techList}>
              <span className={styles.techItem}>OpenAI API</span>
              <span className={styles.techItem}>Vanilla JS</span>
              <span className={styles.techItem}>CSS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioProjects;
