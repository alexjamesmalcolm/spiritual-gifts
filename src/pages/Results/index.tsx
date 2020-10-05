import React from "react";
import useResults from "hooks/useResults";
import classNames from "classnames";
import styles from "./Results.module.css";
import ResultCategory from "./components/ResultCategory";

const Results = () => {
  const results = useResults();
  return (
    <div className={styles.container}>
      <h2>Results</h2>
      <div className={styles.resultsContainer}>
        <p className={classNames(styles.header, styles.name)}>NAME</p>
        <p className={classNames(styles.header, styles.score)}>SCORE</p>
        <p className={classNames(styles.header, styles.rank)}>RANK</p>
        {results.map((result) => (
          <ResultCategory key={result.name} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Results;
