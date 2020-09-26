import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useRoutes from "hooks/useRoutes";

const App = () => {
  const routes = useRoutes();
  return (
    <div>
      <Router>
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route exact path={path} key={path}>
              <Suspense fallback={<p>Loading...</p>}>
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
