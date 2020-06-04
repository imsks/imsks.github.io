import React from "react";
import { Link } from "react-router-dom";
import Slugify from "slugify";
import PortfolioData from "../data/Portfolio.data.json";

const Ventures = (props) => {
  const { ventures_data } = props;
  const data = ventures_data.data;
  const { ventures } = PortfolioData.slugs;

  return (
    <section className="ventures">
      <h1 className="ventures__heading heading-primary--main u-center-text">
        {ventures_data.heading}
      </h1>
      {/* Venture Card Content */}
      <div className="ventures__content">
        {Object.keys(data).map((key) => {
          const venture_name =
            ventures + "/" + Slugify(data[key].name).toLowerCase();
          return (
            <div className="card" key={key}>
              <h3 className="card__heading">{data[key].name}</h3>
              <Link to={venture_name}>
                <div className="card__button"></div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Ventures;
