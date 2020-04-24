import React from "react";

const SkillPopup = (props) => {
  const { popup_data } = props;
  // console.log(popup_data);
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__content__header">
          <h2 className="heading-secondary--main popup__content__header__heading">
            {popup_data.name}
          </h2>
          <h3 className="heading-secondary--sub popup__content__header__subheading">
            {popup_data.description}
          </h3>
          <a href="" className="popup__close">
            &times;
          </a>
          <div className="popup__content__header__meta">
            <span className="popup__content__header__meta__content">Used</span>
            <div className="popup__content__header__softwares">
              {popup_data["software_used"].map((key, el, id) => {
                // console.log(key, el, id);
                return (
                  <div className="popup__content__header__software">
                    <h5
                      className="popup__content__header__software__item"
                      key={key}
                    >
                      {key}
                    </h5>
                  </div>
                );
              })}
            </div>
            <span className="popup__content__header__meta__content">As</span>
            <div className="popup__content__header__roles">
              {popup_data["roles"].map((key, el, id) => {
                // console.log(key, el, id);
                return (
                  <div className="popup__content__header__role">
                    <h5
                      className="popup__content__header__role__item"
                      key={key}
                    >
                      {key}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPopup;
