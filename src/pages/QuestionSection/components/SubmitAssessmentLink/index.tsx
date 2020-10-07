import React, { useMemo } from "react";
import useAnswers from "hooks/useAnswers";
import useCompressedResults from "hooks/useCompressedResults";
import { Link } from "react-router-dom";

const SubmitAssessmentLink = () => {
  const resultsSearchParams = useCompressedResults();
  const { clearAnswers } = useAnswers();
  return useMemo(
    () => (
      <Link to={`/result/${resultsSearchParams}`} onClick={clearAnswers}>
        Finish
      </Link>
    ),
    [clearAnswers, resultsSearchParams]
  );
};

export default SubmitAssessmentLink;
