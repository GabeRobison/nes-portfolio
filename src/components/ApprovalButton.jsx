import React, { useState, useRef, useEffect } from "react";
import styles from "./styles/ApprovalButton.module.css";

const ApprovalButton = () => {
  const [approved, setApproved] = useState(null);
  const [denyPosition, setDenyPosition] = useState({ top: 0, left: 120 });
  const denyButtonRef = useRef(null);
  const containerRef = useRef(null);

  const moveDenyButton = () => {
    if (containerRef.current && denyButtonRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = denyButtonRef.current.getBoundingClientRect();
      const buttonWidth = buttonRect.width;
      const buttonHeight = buttonRect.height;

      const padding = 10;
      const maxX = Math.max(0, containerRect.width - buttonWidth - padding);
      const maxY = Math.min(
        100,
        Math.max(0, containerRect.height * 0.6 - buttonHeight - padding)
      );

      let newX, newY;
      let attempts = 0;
      const maxAttempts = 10;

      do {
        newX = Math.floor(Math.random() * maxX);
        newY = Math.floor(Math.random() * maxY);
        attempts++;
        if (attempts >= maxAttempts) break;
      } while (
        Math.abs(newX - denyPosition.left) < buttonWidth &&
        Math.abs(newY - denyPosition.top) < buttonHeight
      );

      newX = Math.min(Math.max(0, newX), maxX);
      newY = Math.min(Math.max(0, newY), maxY);

      setDenyPosition({ left: newX, top: newY });
    }
  };

  useEffect(() => {
    if (approved === null) {
      const timer = setTimeout(() => {
        moveDenyButton();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [approved]);

  return (
    <>
      <h2 className="nes-text is-primary">Portfolio Survey</h2>
      <div
        className={`nes-container ${styles.approvalContainer}`}
        ref={containerRef}
      >
        {approved === null ? (
          <>
            <div className={styles.buttonContainer}>
              <button
                className={`pixel-hover nes-btn is-success ${styles.approveButton} pixel-bounce`}
                onClick={() => setApproved(true)}
              >
                Love it&nbsp;
                <i className="nes-icon is-small heart"></i>
              </button>
              <button
                ref={denyButtonRef}
                className={`nes-btn is-error ${styles.denyButton}`}
                onClick={() => setApproved(false)}
                onMouseEnter={moveDenyButton}
                style={{
                  left: `${denyPosition.left}px`,
                  top: `${denyPosition.top}px`,
                  transition: "all 0.2s ease",
                  zIndex: 100,
                }}
              >
                Hate it&nbsp;
                <i className="nes-icon close is-small"></i>
              </button>
            </div>
          </>
        ) : approved ? (
          <div className={styles.resultContainer}>
            <div className={`${styles.approved}`}>
              <p className={styles.messageContainer}>
                😊 Thank you for the validation.
              </p>
            </div>
            <button
              className={`${styles.resetButton} nes-btn`}
              onClick={() => setApproved(null)}
            >
              click to bring back fun red button
            </button>
          </div>
        ) : (
          <div className={styles.resultContainer}>
            <p className={styles.messageContainer}>
              😢 I understand. I'll keep improving!
            </p>
            <button
              className={`${styles.resetButton} nes-btn`}
              onClick={() => setApproved(null)}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ApprovalButton;
