import { useMemo } from "react";
import useAnswers from "hooks/useAnswers";
import { Category } from "hooks/useQuestions";

interface Result {
  category: Category;
  score: number;
}

const useResults = (): Result[] => {
  const { questionsWithAnswers } = useAnswers();
  return useMemo<Result[]>(
    () =>
      questionsWithAnswers
        .reduce((accumulator: Result[], currentValue) => {
          const isCategoryPresentAlready = accumulator.some(
            (result) => result.category === currentValue.category
          );
          if (isCategoryPresentAlready) {
            return accumulator.map((result) =>
              result.category === currentValue.category
                ? {
                    ...result,
                    score: result.score + (currentValue.answer || 0),
                  }
                : result
            );
          } else {
            return accumulator.concat([
              {
                category: currentValue.category,
                score: currentValue.answer || 0,
              },
            ]);
          }
        }, [])
        .sort((a, b) => b.score - a.score),
    [questionsWithAnswers]
  );
};

export default useResults;
