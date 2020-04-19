import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Location from "./Data/Link.data";

import PortfolioApp from "./pages/PortfolioApp";
import Status from "./pages/Status";

import "./styles/styles.scss";

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path={Location.home} component={PortfolioApp} exact={true} />
        <Route path={Location.status} component={Status} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
