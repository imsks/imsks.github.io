import React from "react";
import { Link } from "react-router-dom";
import Slugify from "slugify";
// import VentureItem from "../pages/ventures/VentureItem";

const Ventures = (props) => {
  const { ventures_data } = props;
  const data = ventures_data.data;
  const currLoc = ventures_data.url;
  // let { path, url } = useRouteMatch();

  return (
    <section className="ventures">
      <h1 className="ventures__heading heading-primary--main u-center-text">
        {ventures_data.heading}
      </h1>
      {/* Venture Card Content */}
      <div className="ventures__content">
        {Object.keys(data).map((key) => {
          const venture_name =
            currLoc + "/" + Slugify(data[key].name).toLowerCase();
          // const goTo = {
          //   pathName: venture_name,
          //   state: "testing",
          // };
          // console.log("1." + venture_name);
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
