import { useCallback, useMemo } from "react";
import useQuestionSet from "hooks/useQuestionSet";
import useQuestions, { Question } from "../useQuestions";
import { setAnswerOfQuestionNumbered, clearAllAnswers } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

export interface AnsweredQuestion extends Question {
  answer?: 0 | 1 | 2 | 3;
}

interface AnswerQuestionProps {
  questionNumber: number;
  answer: 0 | 1 | 2 | 3;
}

const useAnswers = (
  questionSetNumber?: number
): {
  questionsWithAnswers: AnsweredQuestion[];
  unansweredQuestions: Question[];
  answerQuestion: (props: AnswerQuestionProps) => void;
  clearAnswers: () => void;
} => {
  const allQuestions = useQuestions();
  const questionSet = useQuestionSet(questionSetNumber || 1);
  const questions = useMemo(
    () => (questionSetNumber ? questionSet : allQuestions),
    [allQuestions, questionSet, questionSetNumber]
  );
  const answers = useSelector((store: RootState) => store.answers.questions);
  const questionsWithAnswers = useMemo<AnsweredQuestion[]>(
    () =>
      questions.map((question) => {
        const answer = answers.find(
          (answer) => answer.number === question.number
        );
        return answer ? { ...question, answer: answer.answer } : question;
      }),
    [answers, questions]
  );
  const dispatch = useDispatch();
  const answerQuestion = useCallback(
    ({ answer, questionNumber: number }: AnswerQuestionProps) => {
      dispatch(setAnswerOfQuestionNumbered({ answer, number }));
    },
    [dispatch]
  );
  const clearAnswers = useCallback(() => {
    dispatch(clearAllAnswers());
  }, [dispatch]);
  const unansweredQuestions = useMemo(
    () =>
      questionsWithAnswers.filter((question) => question.answer === undefined),
    [questionsWithAnswers]
  );
  return {
    answerQuestion,
    clearAnswers,
    questionsWithAnswers,
    unansweredQuestions,
  };
};

export default useAnswers;
