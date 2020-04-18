import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PortfolioApp from "./pages/PortfolioApp";
import Status from "./pages/Status";

import "./styles/styles.scss";

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={PortfolioApp} exact={true} />
        <Route path="/status" component={Status} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
