import React from "react";

const Ventures = (props) => {
  const { ventures_data } = props;
  const data = ventures_data.data;

  return (
    <section className="ventures">
      <h1 className="ventures__heading heading-primary--main u-center-text">
        {ventures_data.heading}
      </h1>
      {/* Venture Card Content */}
      <div className="ventures__content">
        {Object.keys(data).map((key) => {
          return (
            <div className="card" key={key}>
              <h3 className="card__heading">{data[key].name}</h3>
              <span className="card__button"></span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Ventures;
