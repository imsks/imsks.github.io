import React from "react";
import PortfolioData from "../../Data/Portfolio.data.json";
import Header from "../../components/Header";

const SkillItem = (props) => {
  // console.log(props.skillData);
  const { skillName, skillAbout, skillData } = props;
  return (
    <section className="skillitem">
      <Header header_data={PortfolioData.header_data} />
      <div className="skillitem__content">
        <h1 className="heading-secondary--main skillitem__content__heading">
          {skillName}
        </h1>
        <p className="heading-secondary--sub skillitem__content__about">
          {skillAbout}
        </p>
        <div className="skillitem__content__project">
          {Object.keys(skillData).map((key, id) => {
            const project_data = skillData[key];
            console.log(project_data.meta_data);

            return id != 0 ? (
              <div className="card skillitem__content__project__card" key={key}>
                <h3 className="heading-secondary--main skillitem__content__project__heading">
                  {project_data.name}
                </h3>
                <p className="heading-secondary--sub skillitem__content__project__description">
                  {project_data.description}
                </p>
                <a href="#popup">
                  <button className="btn skillitem__content__project__cta">
                    {skillData.cta}
                  </button>
                </a>
              </div>
            ) : (
              ""
            );
          })}
        </div>

        {/* Popup starts here */}
        <div className="popup" id="popup">
          <div className="popup__content">
            <div className="popup__left">
              <img
                src="img/nat-8.jpg"
                alt="Tour photo"
                className="popup__img"
              />
              <img
                src="img/nat-9.jpg"
                alt="Tour photo"
                className="popup__img"
              />
            </div>
            <div className="popup__right">
              <a href="#section-tours" className="popup__close">
                &times;
              </a>
              <h2 className="heading-secondary u-margin-bottom-small">
                Start booking now
              </h2>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Important &ndash; Please read these terms before booking
              </h3>
              <p className="popup__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
                sed risus pretium quam. Aliquam sem et tortor consequat id.
                Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
                neque egestas.
              </p>
              <a href="#" className="btn btn--green">
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillItem;
