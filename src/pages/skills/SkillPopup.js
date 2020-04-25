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
                  <div className="popup__content__header__software" key={key}>
                    <h5 className="popup__content__header__software__item">
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
                  <div className="popup__content__header__role" key={key}>
                    <h5 className="popup__content__header__role__item">
                      {key}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="popup__content__hline"></div>
        </div>
        <div className="popup__content__main">
          <div>
            {popup_data["images"] != null
              ? popup_data["images"].map((key, el, id) => {
                  // console.log(popup_data["images"]);
                  return el == 0 ? (
                    <h2 className="popup__content__main__heading" key={key}>
                      {popup_data["images"][0]}
                    </h2>
                  ) : (
                    <div className="popup__content__main__data" key={key}>
                      <div className="popup__content__main__data__images">
                        <div>
                          <img
                            src={key}
                            alt={key}
                            className="popup__content__main__data__image"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          {popup_data["link_data"] != null
            ? popup_data["link_data"].map((key, el, id) => {
                // console.log("The link data is" + popup_data["link_data"]);
                // console.log("The image data is" + popup_data["images"]);
                return el == 0 ? (
                  <div className="popup__content__main__link" key={key}>
                    <a href={id[1]}>
                      <button className="btn popup__content__main__link__button">
                        {id[0]}
                      </button>
                    </a>
                  </div>
                ) : (
                  ""
                );
              })
            : ""}
          {popup_data["link_data"] == null && popup_data["images"] == null ? (
            <div className="popup__content__main__end">
              <h3 className="heading-secondary--main">
                {popup_data["link_data"]}
              </h3>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillPopup;
