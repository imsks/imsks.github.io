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
import AboutMePage from "./pages/aboutMe/AboutMePage";

import "./styles/styles.scss";

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path={Location.home} component={PortfolioApp} exact={true} />
        <Route path={Location.status} component={Status} />
        <Route path={Location.about} component={AboutMePage} />
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
          // console.log(
          //   "2." +
          //     PortfolioData.my_ventures.url +
          //     PortfolioData.my_ventures.data[key].url
          // );
          // console.log(PortfolioData.my_ventures.url);
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
        {Object.keys(PortfolioData.my_skills.data).map((key) => {
          // console.log(
          //   PortfolioData.my_skills.data[key].name,
          //   PortfolioData.my_skills.data[key].about,
          //   key
          // );
          // console.log(
          //   "2." +
          //     PortfolioData.my_skills.url +
          //     PortfolioData.my_skills.data[key].url
          // );
          // console.log(PortfolioData.my_skills.data[key]);
          return (
            <Route
              path={
                PortfolioData.my_skills.url +
                PortfolioData.my_skills.data[key].url
              }
              render={() => (
                <SkillItem
                  skillName={PortfolioData.my_skills.data[key].title}
                  skillAbout={PortfolioData.my_skills.data[key].sub_title}
                  skillSpecialized={
                    PortfolioData.my_skills.data[key].specialized_in
                  }
                  skillExp={PortfolioData.my_skills.data[key].experience_data}
                  skillCertificate={
                    PortfolioData.my_skills.data[key].certificates
                  }
                  skillData={PortfolioData.my_skills.data[key].skill_data}
                />
              )}
              key={key}
            />
          );
        })}
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
