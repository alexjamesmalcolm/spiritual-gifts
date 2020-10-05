import { useMemo } from "react";
import useAnswers from "hooks/useAnswers";
import useCategories, { Category, CategoryName } from "hooks/useCategories";

export interface Result extends Category {
  score: number;
  rank: number;
}

const useResults = (categoryName?: CategoryName): Result[] => {
  const { questionsWithAnswers } = useAnswers();
  const categories = useCategories();
  return useMemo<Result[]>(
    () =>
      categories
        .map((category) => ({
          ...category,
          score: questionsWithAnswers
            .filter((question) => question.category === category.name)
            .reduce((score, question) => score + (question.answer || 0), 0),
        }))
        .sort((a, b) => b.score - a.score)
        .map((result, index) => ({ ...result, rank: index + 1 }))
        .filter((result) => !categoryName || categoryName === result.name),
    [categories, categoryName, questionsWithAnswers]
  );
};

export default useResults;
