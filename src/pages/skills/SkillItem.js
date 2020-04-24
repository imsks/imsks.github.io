import React from "react";
import PortfolioData from "../../Data/Portfolio.data.json";
import Header from "../../components/Header";
import SkillPopup from "./SkillPopup";

export default class PortfolioApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill_item_popup_url: "",
    };
    this.setValue = this.setValue.bind(this);
  }

  setValue(e) {
    this.setState({ skill_item_popup_url: e.target.value }, () => {
      console.log(this.state.skill_item_popup_url);
    });
  }

  render() {
    const { skillName, skillAbout, skillData } = this.props;
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
            // console.log(project_data);

            return id != 0 && this.state.skill_item_popup_url != "" ? (
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
