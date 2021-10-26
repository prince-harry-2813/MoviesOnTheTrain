import React from "react";
import {
  Route,
  Switch,
  RouteComponentProps,
  BrowserRouter,
} from "react-router-dom";

import "./App.css";
import GetMovies, { MovieModel } from "./models/MovieModel";

import Layout from "./layout/Layout";
import List from "./components/moviesList/List";
import Create from "./routers/Create";
import Details from "./components/moviesList/Details";
var state: MovieModel[] = [];
const App: React.FC<{}> = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <div className="listContainer">
                <List></List>
              </div>
            </Route>
            <Route exact path="/create" component={Create} />
            <Route exact path="/details/:id" component={Details} />

            <Route path="/edit/:id"></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
