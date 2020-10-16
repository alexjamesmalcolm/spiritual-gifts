import { useMemo, useState } from "react";
import { Result } from "hooks/useResults";
import styles from "../../Results.module.css";

const ResultCategory = ({
  result: { description, name, rank, score },
}: {
  result: Result;
}) => {
  const isDescriptionExpandedByDefault = useMemo<boolean>(() => rank <= 3, [
    rank,
  ]);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(
    isDescriptionExpandedByDefault
  );
  return (
    <>
      <div className={styles.name}>{name}</div>
      <div className={styles.score}>{score}</div>
      <div className={styles.rank}>{rank}</div>
      <div className={styles.description}>
        {isDescriptionExpanded ? (
          <>
            <button onClick={() => setIsDescriptionExpanded(false)}>
              Collapse
            </button>
            {description}
          </>
        ) : (
          <button onClick={() => setIsDescriptionExpanded(true)}>Expand</button>
        )}
      </div>
    </>
  );
};

export default ResultCategory;
