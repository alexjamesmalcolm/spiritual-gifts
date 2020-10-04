import React, { Fragment, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import useAnswers from "hooks/useAnswers";
import useQuestionSet from "hooks/useQuestionSet";
import styles from "./QuestionSection.module.css";

const PaginationControls = () => {
  const params: { questionSetNumber: string } = useParams();
  const questionSetNumber = useMemo(() => Number(params.questionSetNumber), [
    params.questionSetNumber,
  ]);
  const isAbleToGoBack = useMemo(() => questionSetNumber !== 1, [
    questionSetNumber,
  ]);
  const isAbleToGoForwards = useMemo(() => questionSetNumber !== 7, [
    questionSetNumber,
  ]);
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
              <Link to={`/question-set/${Math.ceil(question.number / 19)}`}>
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
      <PaginationControls />
      {questionsWithAnswers.map((question) => (
        <fieldset
          key={question.number}
          id={`question-${question.number}`}
          className={styles.fieldSet}
        >
          <legend>
            <span>{question.number}) </span>
            <span>{question.textContent}</span>
          </legend>
          <div className={styles.answersContainer}>
            {answers.map((answer) => (
              <Fragment key={answer.value}>
                <input
                  type="radio"
                  id={`answer-${question.number}-${answer.value}`}
                  name={question.number.toString()}
                  onChange={() =>
                    answerQuestion({
                      answer: answer.value,
                      questionNumber: question.number,
                    })
                  }
                  checked={question.answer === answer.value}
                />
                <label htmlFor={`answer-${question.number}-${answer.value}`}>
                  {answer.value}) {answer.textContent}
                </label>
              </Fragment>
            ))}
          </div>
        </fieldset>
      ))}
      <PaginationControls />
    </div>
  );
};

export default QuestionSection;
