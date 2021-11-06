import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useRoutes from "hooks/useRoutes";
import Loading from "components/Loading";
import styles from "./App.module.css";

const ServiceWorker = lazy(() => import("components/ServiceWorker"));

const App = () => {
  const routes = useRoutes();
  return (
    <div className={styles.container}>
      <Suspense fallback={null}>
        <ServiceWorker />
      </Suspense>
      <Router>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} key={path}>
              <Suspense fallback={<Loading />}>
                <Component />
              </Suspense>
            </Route>
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
