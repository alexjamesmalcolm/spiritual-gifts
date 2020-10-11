import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useRoutes from "hooks/useRoutes";
import Loading from "components/Loading";
import useServiceWorker from "hooks/useServiceWorker";
import styles from "./App.module.css";

const InitialServiceWorkerInstallationDialog = lazy(
  () =>
    import(
      "hooks/useServiceWorker/components/InitialServiceWorkerInstallationDialog"
    )
);
const UpdateForServiceWorkerAvailableDialog = lazy(
  () =>
    import(
      "hooks/useServiceWorker/components/UpdateForServiceWorkerAvailableDialog"
    )
);

const App = () => {
  const routes = useRoutes();
  const { isInitialized, isUpdated } = useServiceWorker();
  return (
    <div className={styles.container}>
      <Suspense fallback={null}>
        {isInitialized && <InitialServiceWorkerInstallationDialog />}
        {isUpdated && <UpdateForServiceWorkerAvailableDialog />}
      </Suspense>
      <Router>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route exact path={path} key={path}>
              <Suspense fallback={<Loading />}>
                <Component />
              </Suspense>
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
