import React from "react";

const Ventures = (props) => {
  const { ventures_data } = props;

  return (
    <section className="ventures">
      <h1 className="ventures__heading heading-primary--main u-center-text">
        {ventures_data.heading}
      </h1>
      {/* Venture Card Content */}
      <div className="ventures__content">
        {}
        <div className="card">
          <h3 className="card__heading">
            {ventures_data.gangs_of_hackspur.name}
          </h3>
        </div>

        <div className="card">
          <h3 className="card__heading">
            {ventures_data.gangs_of_hackspur.name}
          </h3>
        </div>

        {Object.keys(ventures_data).map((key) => {
          return <h1>{ventures_data[key].name}</h1>;
        })}
      </div>
    </section>
  );
};

export default Ventures;
