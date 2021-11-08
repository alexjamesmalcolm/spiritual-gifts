import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import useRoutes from "hooks/useRoutes";
import Loading from "components/Loading";
import styles from "./App.module.css";

const App = () => {
  const routes = useRoutes();
  return (
    <div className={styles.container}>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route
            path={path}
            key={path}
            element={
              <Suspense fallback={<Loading />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
