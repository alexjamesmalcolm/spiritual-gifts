import useAnswers from "hooks/useAnswers";
import { useMemo } from "react";

const usePercentageDone = (): string => {
  const { questionsWithAnswers } = useAnswers();
  const percentageDone = useMemo<number>(
    () =>
      (100 *
        questionsWithAnswers.filter((question) => question.answer !== undefined)
          .length) /
      questionsWithAnswers.length,
    [questionsWithAnswers]
  );
  const precisePercentageDone = useMemo<string>(
    () => Number(percentageDone.toPrecision(3)).toString(),
    [percentageDone]
  );
  return precisePercentageDone;
};

export default usePercentageDone;
