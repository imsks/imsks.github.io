import React from "react";
import { Helmet } from "react-helmet";

import PortfolioData from "../../data/Portfolio.data.json";
import Header from "../../components/Header";
import Ventures from "../../components/Ventures";

const VenturesPage = () => {
  return (
    <main className="ventures__page">
      <Helmet>
        <title>Ventures</title>
        <meta
          name="description"
          content="know more about the startups I had/have been working on."
        />
        <meta
          name="keywords"
          content="sachin shukla startups, sachin shukla ventures, sachin shukla virgin tutor, sachin shukla gangs of hackspur, sachin shukla virgo, virgo team sachin, virgin tutor co-founder"
        />
      </Helmet>
      <Header header_data={PortfolioData.header_data} />
      <div className="ventures__page__content">
        <Ventures ventures_data={PortfolioData.my_ventures} />
      </div>
    </main>
  );
};

export default VenturesPage;
