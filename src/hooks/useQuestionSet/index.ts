import { useMemo } from "react";
import useQuestions from "hooks/useQuestions";
import { questionsPerPage } from "utils/constants";

const useQuestionSet = (questionSetNumber: number) => {
  const questions = useQuestions();
  return useMemo(
    () =>
      questions.slice(
        questionsPerPage * (questionSetNumber - 1),
        questionsPerPage * questionSetNumber
      ),
    [questionSetNumber, questions]
  );
};

export default useQuestionSet;
