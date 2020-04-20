import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Location from "./Data/Link.data";

import PortfolioApp from "./pages/PortfolioApp";
import Status from "./pages/Status";
import VenturesPage from "./pages/ventures/VenturesPage";
import VentureItem from "./pages/ventures/VentureItem";

import "./styles/styles.scss";

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path={Location.home} component={PortfolioApp} exact={true} />
        <Route path={Location.status} component={Status} />
        <Route path={Location.ventures.main} component={VenturesPage} />
        <Route path="/a/b" component={VentureItem} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
