import React from "react";
import { Link } from "react-router-dom";
import PortfolioProjects from "./PortfolioProjects";
import ApprovalButton from "./ApprovalButton";
import styles from "./styles/ProjectsPage.module.css";

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPageContainer}>
      <div className={styles.backButtonContainer}>
        <Link to="/" className={styles.backLink}>
          <button className={`nes-btn ${styles.backButton} pixel-bounce`}>
            <span className={styles.pixelArrow}>←</span> Back to Home
          </button>
        </Link>
      </div>

      <PortfolioProjects />
      <ApprovalButton />
    </div>
  );
};

export default ProjectsPage;
