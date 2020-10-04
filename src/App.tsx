import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useRoutes from "hooks/useRoutes";
import Loading from "components/Loading";

const App = () => {
  const routes = useRoutes();
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
