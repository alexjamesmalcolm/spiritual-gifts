import useAnswers from "hooks/useAnswers";
import useQuestionSet from "hooks/useQuestionSet";
import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { questionsPerPage, setsOfQuestions } from "utils/constants";
import SubmitAssessmentLink from "../SubmitAssessmentLink";
import styles from "./PaginationControls.module.css";

const PaginationControls = ({ isSimple = false }: { isSimple?: boolean }) => {
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
  return useMemo(
    () => (
      <div className={styles.container}>
        <div className={styles.links}>
          {!isSimple && <Link to="/">Home</Link>}
          {isAbleToGoBack && (
            <Link to={`/question-set/${questionSetNumber - 1}`}>Previous</Link>
          )}
          {isAbleToGoForwards && (
            <Link to={`/question-set/${questionSetNumber + 1}`}>Next</Link>
          )}
          {isAbleToFinish && <SubmitAssessmentLink />}
        </div>
        {(!isSimple || isAbleToFinish) &&
          unansweredQuestionsFromPreviousPages.length > 0 && (
            <div>
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
    ),
    [
      isAbleToFinish,
      isAbleToGoBack,
      isAbleToGoForwards,
      isSimple,
      questionSetNumber,
      unansweredQuestionsFromPreviousPages,
    ]
  );
};

export default PaginationControls;
