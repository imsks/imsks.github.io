import React from "react";
import PortfolioData from "../../data/Portfolio.data.json";
import Header from "../../components/Header";
import AboutMe from "../../components/AboutMe";

import "./aboutMe.styles.scss";

const AboutMePage = () => {
  return (
    <main className="about__page">
      <Header header_data={PortfolioData.header_data} />
      <div className="about__page__content">
        <AboutMe about_data={PortfolioData.about_me} />
      </div>
    </main>
  );
};

export default AboutMePage;
