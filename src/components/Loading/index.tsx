import React from "react";
import styles from "./Progress.module.css";
import { Refreshing } from "css-spinners-react";

const Loading = () => (
  <div className={styles.container}>
    <Refreshing />
  </div>
);

export default Loading;
