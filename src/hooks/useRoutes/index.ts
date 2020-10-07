import { lazy, LazyExoticComponent } from "react";

interface Route {
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
}

const Results = lazy(() => import("pages/Results"));
const Homepage = lazy(() => import("pages/Homepage"));
const QuestionSection = lazy(() => import("pages/QuestionSection"));

const useRoutes = (): Route[] => [
  { path: "/", Component: Homepage },
  { path: "/result/:compressedResults", Component: Results },
  { path: "/question-set/:questionSetNumber", Component: QuestionSection },
];

export default useRoutes;
