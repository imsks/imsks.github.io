import React from "react";
import PortfolioData from "../../Data/Portfolio.data.json";
import Header from "../../components/Header";

const SkillItem = (props) => {
  console.log(props.ventureLink.link);
  return (
    <section className="skillitem">
      <Header header_data={PortfolioData.header_data} />
      <div className="skillitem__content">Skills</div>
    </section>
  );
};

export default SkillItem;
