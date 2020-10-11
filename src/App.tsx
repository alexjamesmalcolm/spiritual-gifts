import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useRoutes from "hooks/useRoutes";
import Loading from "components/Loading";
import useServiceWorker from "hooks/useServiceWorker";

const App = () => {
  const routes = useRoutes();
  const { isInitialized, isUpdated } = useServiceWorker();
  console.log({ isInitialized, isUpdated });
  return (
    <div>
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
