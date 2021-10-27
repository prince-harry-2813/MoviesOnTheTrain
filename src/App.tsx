import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";

import Layout from "./layout/Layout";
import routes from "./routers/routes";

const App: React.FC<{}> = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
