import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import PortfolioData from "./data/Portfolio.data.json";

import PortfolioApp from "./pages/PortfolioApp";
import Status from "./pages/Status";
import VenturesPage from "./pages/ventures/VenturesPage";
import VentureItem from "./pages/ventures/VentureItem";
import SkillPage from "./pages/skills/SkillPage";
import SkillItem from "./pages/skills/SkillItem";
import AboutMePage from "./pages/aboutMe/AboutMePage";
import BlogHome from "./pages/blog/BlogHome";
import ContactPage from "./pages/ContactPage";

import "./styles/styles.scss";

const {
  home,
  status,
  about,
  ventures,
  skills,
  blog,
  connect,
} = PortfolioData.slugs;

const routes = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path={home} component={PortfolioApp} exact={true} />
        <Route path={status} component={Status} />
        <Route path={about} component={AboutMePage} />
        <Route path={ventures} component={VenturesPage} exact={true} />
        {Object.keys(PortfolioData.my_ventures.data).map((key) => {
          return (
            <Route
              path={ventures + PortfolioData.my_ventures.data[key].url}
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
        <Route path={skills} component={SkillPage} exact={true} />
        {Object.keys(PortfolioData.my_skills.data).map((key) => {
          return (
            <Route
              path={skills + PortfolioData.my_skills.data[key].url}
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

        <Route path={blog} component={BlogHome} exact={true} />

        <Route path={connect} component={ContactPage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
serviceWorker.register();
