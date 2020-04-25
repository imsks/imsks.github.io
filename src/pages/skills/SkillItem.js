import React from "react";
import PortfolioData from "../../Data/Portfolio.data.json";
import Header from "../../components/Header";
import SkillPopup from "./SkillPopup";
import SkillTab from "./SkillTab";

export default class PortfolioApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill_item_popup_url: "",
    };
    this.setValue = this.setValue.bind(this);
  }

  setValue(e) {
    this.setState({ skill_item_popup_url: e.target.value });
  }

  render() {
    const {
      skillName,
      skillAbout,
      skillData,
      skillSpecialized = null,
      skillExp = null,
      skillCertificate = null,
    } = this.props;
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
          {skillExp != null || skillSpecialized != null ? (
            <div className="skillitem__content__desc">
              {skillSpecialized != null ? (
                <div className="skillitem__content__desc__specialize">
                  {skillSpecialized.map((key, el, id) => {
                    // console.log(key, el, id);
                    return el != 0 ? (
                      <div
                        className="skillitem__content__desc__specialize__items"
                        key={key}
                      >
                        <h3 className="popup__content__header__software__item">
                          {key}
                        </h3>
                      </div>
                    ) : (
                      <h2
                        className="heading-secondary--sub skillitem__content__desc__specialize__cta"
                        key={key}
                      >
                        {key}
                      </h2>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
              {skillExp != null ? (
                <div className="skillitem__content__desc__exp">
                  {Object.keys(skillExp).map((key, el, id) => {
                    const temp = skillExp[key];
                    // console.log(key, el, temp);
                    return (
                      <div
                        className="skillitem__content__desc__exp__data"
                        key={key}
                      >
                        <h3 className="skillitem__content__desc__exp__data__item">
                          {temp}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
              {skillCertificate != null ? (
                <SkillTab certificate_data={skillCertificate} />
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <div className="skillitem__content__project">
            {Object.keys(skillData).map((key, id) => {
              const project_data = skillData[key];
              // console.log(key);

              return id != 0 ? (
                <div
                  className="card skillitem__content__project__card"
                  key={key}
                >
                  <h3 className="heading-secondary--main skillitem__content__project__heading">
                    {project_data.name}
                  </h3>
                  <p className="heading-secondary--sub skillitem__content__project__description">
                    {project_data.description}
                  </p>
                  <a href="#popup">
                    <button
                      className="btn skillitem__content__project__cta"
                      onClick={this.setValue}
                      value={key}
                    >
                      {skillData.cta}
                    </button>
                  </a>
                </div>
              ) : (
                ""
              );
            })}
          </div>
          {Object.keys(skillData).map((key, id) => {
            const project_data = skillData[this.state.skill_item_popup_url];
            // console.log(id);
            let i = id;

            return id != 0 &&
              this.state.skill_item_popup_url != "" &&
              i == 1 ? (
              <SkillPopup key={key} popup_data={project_data} />
            ) : (
              ""
            );
          })}
        </div>
      </section>
    );
  }
  // console.log(props.skillData);
}
