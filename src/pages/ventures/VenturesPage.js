import React from "react";
import PortfolioData from "../../data/Portfolio.data.json";
import Header from "../../components/Header";
import Ventures from "../../components/Ventures";

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
