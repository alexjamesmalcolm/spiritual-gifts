import { lazy } from "react";
import useDecompressedResults from "hooks/useDecompressedResults";
const BadResultsLink = lazy(() => import("./components/BadResultsLink"));
const ValidResults = lazy(() => import("./components/ValidResults"));

const Results = () => {
  const results = useDecompressedResults();
  if (results === undefined) {
    return <BadResultsLink />;
  }
  return <ValidResults results={results} />;
};

export default Results;
