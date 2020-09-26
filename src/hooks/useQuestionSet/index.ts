import { useMemo } from "react";
import useQuestions from "hooks/useQuestions";

const useQuestionSet = (questionSetNumber: number) => {
  const questions = useQuestions();
  return useMemo(
    () => questions.slice(19 * (questionSetNumber - 1), 19 * questionSetNumber),
    [questionSetNumber, questions]
  );
};

export default useQuestionSet;
