import React from "react";
import PortfolioData from "../../data/Portfolio.data.json";
import Header from "../../components/Header";

const VentureItem = (props) => {
  return (
    <section className="ventureitem">
      <Header header_data={PortfolioData.header_data} />
      <div className="ventureitem__content">
        <h1 className="heading-secondary--main ventureitem__content__heading">
          {props.ventureName}
        </h1>
        {props.ventureAbout.map((content, key) => {
          return (
            <p
              className="heading-secondary--sub ventureitem__content__description"
              key={key}
            >
              {content}
            </p>
          );
        })}
        {props.ventureLink.link != null ? (
          <a href={props.ventureLink.link}>
            <button className="btn ventureitem__content__button">
              {props.ventureLink.cta}
            </button>
          </a>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default VentureItem;
