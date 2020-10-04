import React from "react";
import { Link } from "react-router-dom";
import Slugify from "slugify";

const Skills = (props) => {
  const { skills_data } = props;
  const data = skills_data.data;
  const currLoc = skills_data.url;

  return (
    <section className="skill">
      <h1 className="skill__heading heading-primary--main u-center-text">
        {skills_data.heading}
      </h1>

      <div className="skill__content">
        {Object.keys(data).map((key, id) => {
          return (
            <div className="skill__card" key={key}>
              <h3 className="skill__card__title">
                {data[`skill_${id + 1}`].title}
              </h3>
              <p className="skill__card__subtitle">
                {data[`skill_${id + 1}`].sub_title}
              </p>
              <Link
                to={currLoc + data[key].url}
                className="btn btn-md skill__card__link"
              >
                {data[`skill_${id + 1}`].cta}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
