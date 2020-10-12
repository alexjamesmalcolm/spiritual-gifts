import useAnswers from "hooks/useAnswers";
import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { questionsPerPage } from "utils/constants";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const {
    unansweredQuestions,
    questionsWithAnswers,
    clearAnswers,
  } = useAnswers();
  const [firstUnansweredQuestion] = unansweredQuestions;
  const hasStarted = useMemo(
    () =>
      questionsWithAnswers.some((question) => question.answer !== undefined),
    [questionsWithAnswers]
  );
  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          Spiritual Gifts Assessment{hasStarted ? " - In Progress" : ""}
        </title>
      </Helmet>
      <h1>Spiritual Gifts Assessment</h1>
      <p>
        Respond to the following assessment according to who you are, not who
        you would like to be, or think you ought to be. Consider: How true are
        these statements for you? What has been your experience?
      </p>
      <p>This assessment could take 45 minutes.</p>
      <div className={styles.assessmentLinksContainer}>
        {hasStarted ? (
          <>
            <Link to="/question-set/1" onClick={clearAnswers}>
              Reset
            </Link>
            <Link
              to={`/question-set/${Math.ceil(
                firstUnansweredQuestion.number / questionsPerPage
              )}`}
            >
              Continue
            </Link>
          </>
        ) : (
          <Link to="/question-set/1">Start Assessment</Link>
        )}
      </div>
      <footer className={styles.footer}>
        <small>This site is not affiliated with any organization.</small>
      </footer>
    </div>
  );
};

export default Homepage;
