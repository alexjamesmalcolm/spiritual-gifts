import React from "react";
import useResults from "hooks/useResults";
import styles from "./Results.module.css";

const Results = () => {
  const results = useResults();
  return (
    <div className={styles.container}>
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.category}>
              <td>{result.category}</td>
              <td>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
