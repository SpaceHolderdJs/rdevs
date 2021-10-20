import React from "react";

import styles from "../styles/logo.module.scss";

export default function Logo() {
  return (
    <div className={`row centered ${styles.logo}`}>
      <div className={`column centered ${styles.yellowBox} `}>
        <span className={styles.letter}>w</span>
        <span className={styles.letter}>e</span>
      </div>
      <span className={styles.bigLetter}>R</span>
      <span className={`row ${styles.devs}`}>devs</span>
    </div>
  );
}
