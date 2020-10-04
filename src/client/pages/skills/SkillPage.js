import React from "react";
import { Helmet } from "react-helmet";

import PortfolioData from "../../data/Portfolio.data.json";
import Header from "../../components/Header";
import Skills from "../../components/Skills";

const VenturesPage = () => {
  return (
    <main className="skills__page">
      <Helmet>
        <title>Skills I have</title>
        <meta
          name="description"
          content="Know more what skills I have and how i use them build solutions"
        />
        <meta
          name="keywords"
          content="sachin shukla skills, sachin shukla web, sachin shuka ux ui, sachin shukla digital marketing, sachin shukla marketing, sachin shukla flutter developer, sachin shukla virgin tutor, virgin tutor sachin shukla"
        />
      </Helmet>
      <Header header_data={PortfolioData.header_data} />
      <div className="skills__page__content">
        <Skills skills_data={PortfolioData.my_skills} />
      </div>
    </main>
  );
};

export default VenturesPage;
