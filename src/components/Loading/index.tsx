import React from "react";
import styles from "./Progress.module.css";

const Loading = () => (
  <div className={styles.container}>
    <progress className={styles.progress} />
  </div>
);

export default Loading;
