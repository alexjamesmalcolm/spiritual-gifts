import React, { Fragment, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import useAnswers from "hooks/useAnswers";
import useQuestionSet from "hooks/useQuestionSet";
import styles from "./QuestionSection.module.css";
import { questionsPerPage, setsOfQuestions } from "utils/constants";

const PaginationControls = () => {
  const params: { questionSetNumber: string } = useParams();
  const questionSetNumber = useMemo(() => Number(params.questionSetNumber), [
    params.questionSetNumber,
  ]);
  const isAbleToGoBack = useMemo(() => questionSetNumber !== 1, [
    questionSetNumber,
  ]);
  const isAbleToGoForwards = useMemo(
    () => questionSetNumber !== setsOfQuestions,
    [questionSetNumber]
  );
  const { unansweredQuestions } = useAnswers();
  const currentPageQuestions = useQuestionSet(questionSetNumber);
  const unansweredQuestionsFromPreviousPages = useMemo(
    () =>
      unansweredQuestions.filter(
        (question) => question.number < currentPageQuestions[0].number
      ),
    [currentPageQuestions, unansweredQuestions]
  );
  const isAbleToFinish = useMemo(() => unansweredQuestions.length === 0, [
    unansweredQuestions.length,
  ]);
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationLinks}>
        <Link to="/">Home</Link>
        {isAbleToGoBack && (
          <Link to={`/question-set/${questionSetNumber - 1}`}>Previous</Link>
        )}
        {isAbleToGoForwards && (
          <Link to={`/question-set/${questionSetNumber + 1}`}>Next</Link>
        )}
        {isAbleToFinish && <Link to="/result">Finish</Link>}
      </div>
      {unansweredQuestionsFromPreviousPages.length > 0 && (
        <div className={styles.unansweredQuestions}>
          <p>Please go back and answer the following questions:</p>
          {unansweredQuestionsFromPreviousPages.map((question) => (
            <span key={question.number}>
              <Link
                to={`/question-set/${Math.ceil(
                  question.number / questionsPerPage
                )}`}
              >
                {question.number}
              </Link>
              ,{" "}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

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
  return (
    <div className={styles.container}>
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
                  return (
                    <Fragment key={inputId}>
                      <input
                        type="radio"
                        id={inputId}
                        name={fieldsetId}
                        onChange={() =>
                          answerQuestion({
                            answer: answer.value,
                            questionNumber: question.number,
                          })
                        }
                        checked={question.answer === answer.value}
                      />
                      <label htmlFor={inputId}>
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
      <PaginationControls />
    </div>
  );
};

export default QuestionSection;
