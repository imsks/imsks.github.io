import React from "react";
import { Helmet } from "react-helmet";

import PortfolioData from "../../data/Portfolio.data.json";
import Header from "../../components/Header";
import AboutMe from "../../components/AboutMe";

import "./aboutMe.styles.scss";

const AboutMePage = () => {
  return (
    <main className="about__page">
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="Know more about what I do and why?" />
        <meta
          name="keywords"
          content="sachin shukla, sachin shukla vit, sachin vit, sachin vit vellore, about sachin kr. shukla, sachin shukla college, sachin shukla life, sachin shukla, startups"
        />
      </Helmet>
      <Header header_data={PortfolioData.header_data} />
      <div className="about__page__content">
        <AboutMe about_data={PortfolioData.about_me} />
      </div>
    </main>
  );
};

export default AboutMePage;
