import React from "react";
import styles from "./styles/ContentWrapper.module.css";

const ContentWrapper = ({ children }) => {
  return (
    <div className={styles.contentWrapper}>
      {children}
      <div className={styles.spacer}></div>
    </div>
  );
};

export default ContentWrapper;
