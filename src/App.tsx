import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useRoutes from "hooks/useRoutes";
import Loading from "components/Loading";
import useServiceWorker from "hooks/useServiceWorker";
import styles from "./App.module.css";

const Dialog = lazy(() => import("components/Dialog"));

const App = () => {
  const routes = useRoutes();
  const { isInitialized, isUpdated, updateServiceWorker } = useServiceWorker();
  return (
    <div className={styles.container}>
      <Suspense fallback={null}>
        {isInitialized && (
          <Dialog duration={5000}>
            <p>Page has been saved for offline use</p>
          </Dialog>
        )}
        {isUpdated && (
          <Dialog>
            <p>There is a new version available.</p>
            <button onClick={updateServiceWorker}>Update</button>
          </Dialog>
        )}
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
