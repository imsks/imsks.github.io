import React from "react";
import PortfolioData from "../../Data/Portfolio.data.json";
import Header from "../../components/Header";
import Skills from "../../components/Skills";

// import "./ventures.styles.scss";

const VenturesPage = () => {
  return (
    <main className="ventures__page">
      <Header header_data={PortfolioData.header_data} />
      <div className="ventures__page__content">
        <Ventures ventures_data={PortfolioData.my_ventures} />
      </div>
    </main>
  );
};

export default VenturesPage;
