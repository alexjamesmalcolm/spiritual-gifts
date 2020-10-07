import useResults from "hooks/useResults";
import { compress } from "lzutf8";
import { useMemo } from "react";

const useCompressedResults = (): string => {
  const results = useResults();
  return useMemo<string>(
    () =>
      encodeURIComponent(
        compress(
          JSON.stringify(
            results.reduce(
              (accumulator, result) => ({
                ...accumulator,
                [result.shortName]: result.score,
              }),
              {}
            )
          ),
          { outputEncoding: "Base64" }
        )
      ),
    [results]
  );
};

export default useCompressedResults;
