import React from "react";
import { Link } from "react-router-dom";
import styles from "./BadResultsLink.module.css";

const BadResultsLink = () => (
  <div className={styles.container}>
    <p>No results found at this link</p>
    <Link to="/">Return Home</Link>
  </div>
);

export default BadResultsLink;
