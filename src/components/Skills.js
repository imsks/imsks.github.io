import React from "react";

const Skills = (props) => {
  const { skills_data } = props;
  const data = skills_data.data;
  //   console.log(data);

  return (
    <section className="skill">
      <h1 className="skill__heading heading-primary--main u-center-text">
        {skills_data.heading}
      </h1>

      <div className="skill__content">
        {Object.keys(data).map((key, id) => {
          // console.log(data[`skill_${id + 1}`].title);
          return (
            <div className="skill__card" key={key}>
              <h3 className="skill__card__title">
                {data[`skill_${id + 1}`].title}
              </h3>
              <p className="skill__card__subtitle">
                {data[`skill_${id + 1}`].sub_title}
              </p>
              <a href="#" className="btn btn-md skill__card__link">
                {data[`skill_${id + 1}`].cta}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
