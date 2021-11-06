import { useMemo } from "react";
import { Result } from "hooks/useResults";
import { useParams } from "react-router-dom";
import { decompress } from "lzutf8";
import useCategories, { CategoryName } from "hooks/useCategories";

const useDecompressedResults = (): Result[] | undefined => {
  const { compressedResults = "" } = useParams<"compressedResults">();
  const categories = useCategories();
  return useMemo<Result[] | undefined>(() => {
    try {
      return Object.entries(
        JSON.parse(
          decompress(decodeURIComponent(compressedResults), {
            inputEncoding: "Base64",
          })
        ) as { [key: string]: number }
      )
        .map(([shortName, score]) => {
          const category = categories.find(
            (category) => category.shortName === shortName
          ) || {
            shortName,
            name: shortName as CategoryName,
            description: <p>{shortName}</p>,
          };
          return {
            ...category,
            score,
          };
        })
        .sort((a, b) => b.score - a.score)
        .map((category, index) => ({ ...category, rank: index + 1 }));
    } catch (error) {
      if (error instanceof Error) {
        console.groupCollapsed(`Error Parsing Results Link: ${error.message}`);
      }
      console.warn(error);
      console.groupEnd();
      return undefined;
    }
  }, [categories, compressedResults]);
};

export default useDecompressedResults;
