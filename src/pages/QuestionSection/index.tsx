import React, { Fragment, useEffect, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import useAnswers from "hooks/useAnswers";
import classNames from "classnames";
import styles from "./QuestionSection.module.css";
import PaginationControls from "./components/PaginationControls";
import { Helmet } from "react-helmet-async";
import usePercentageDone from "hooks/usePercentageDone";

interface Answer {
  value: 0 | 1 | 2 | 3;
  textContent: string;
}

const QuestionSection = () => {
  const params: { questionSetNumber: string } = useParams();
  const questionSetNumber = Number(params.questionSetNumber);
  const { answerQuestion, questionsWithAnswers } = useAnswers(
    questionSetNumber
  );
  const answers = useMemo<Answer[]>(
    () => [
      { value: 0, textContent: "Not at all, never" },
      { value: 1, textContent: "Some of the time, once in a while" },
      { value: 2, textContent: "Most of the time, usually true" },
      { value: 3, textContent: "Consistently, definitely true" },
    ],
    []
  );
  const percentageDone = usePercentageDone();
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    containerRef.current?.scrollTo(0, 0);
  }, [questionSetNumber]);
  return (
    <div ref={containerRef} className={styles.container}>
      <Helmet>
        <title>Spiritual Gifts - {percentageDone}% Done</title>
      </Helmet>
      <header>
        <PaginationControls />
      </header>
      <main>
        {questionsWithAnswers.map((question) => {
          const fieldsetId = `${styles.question}-${question.number}`;
          return (
            <fieldset
              key={fieldsetId}
              id={fieldsetId}
              className={styles.fieldSet}
            >
              <legend>
                <span>{question.number}) </span>
                <span>{question.textContent}</span>
              </legend>
              <div className={styles.answersContainer}>
                {answers.map((answer) => {
                  const inputId = `${styles.answer}-${question.number}-${answer.value}`;
                  const answerValueClass = {
                    [styles.zero]: answer.value === 0,
                    [styles.one]: answer.value === 1,
                    [styles.two]: answer.value === 2,
                    [styles.three]: answer.value === 3,
                  };
                  return (
                    <Fragment key={inputId}>
                      <input
                        type="radio"
                        id={inputId}
                        name={fieldsetId}
                        className={classNames(styles.input, answerValueClass)}
                        onChange={() =>
                          answerQuestion({
                            answer: answer.value,
                            questionNumber: question.number,
                          })
                        }
                        checked={question.answer === answer.value}
                      />
                      <label
                        className={classNames(styles.label, answerValueClass)}
                        htmlFor={inputId}
                      >
                        {answer.value}) {answer.textContent}
                      </label>
                    </Fragment>
                  );
                })}
              </div>
            </fieldset>
          );
        })}
      </main>
      <footer>
        <PaginationControls />
      </footer>
    </div>
  );
};

export default QuestionSection;
