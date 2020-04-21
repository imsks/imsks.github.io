import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Location from "./Data/Link.data";
import PortfolioData from "./Data/Portfolio.data.json";

import PortfolioApp from "./pages/PortfolioApp";
import Status from "./pages/Status";
import VenturesPage from "./pages/ventures/VenturesPage";
import VentureItem from "./pages/ventures/VentureItem";
import SkillPage from "./pages/skills/SkillPage";
import SkillItem from "./pages/skills/SkillItem";

import "./styles/styles.scss";

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path={Location.home} component={PortfolioApp} exact={true} />
        <Route path={Location.status} component={Status} />
        <Route
          path={PortfolioData.my_ventures.url}
          component={VenturesPage}
          exact={true}
        />
        {Object.keys(PortfolioData.my_ventures.data).map((key) => {
          // console.log(
          //   PortfolioData.my_ventures.data[key].name,
          //   PortfolioData.my_ventures.data[key].about,
          //   key
          // );
          return (
            <Route
              path={
                PortfolioData.my_ventures.url +
                PortfolioData.my_ventures.data[key].url
              }
              render={() => (
                <VentureItem
                  ventureName={PortfolioData.my_ventures.data[key].name}
                  ventureAbout={PortfolioData.my_ventures.data[key].about}
                  ventureLink={PortfolioData.my_ventures.data[key].visit_link}
                />
              )}
              key={key}
            />
          );
        })}
        <Route
          path={PortfolioData.my_skills.url}
          component={SkillPage}
          exact={true}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
