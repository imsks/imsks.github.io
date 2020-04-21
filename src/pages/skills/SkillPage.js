import React from "react";
import PortfolioData from "../../Data/Portfolio.data.json";
import Header from "../../components/Header";
import Skills from "../../components/Skills";

// import "./ventures.styles.scss";

const VenturesPage = () => {
  return (
    <main className="skills__page">
      <Header header_data={PortfolioData.header_data} />
      <div className="skills__page__content">
        <Skills skills_data={PortfolioData.my_skills} />
      </div>
    </main>
  );
};

export default VenturesPage;
