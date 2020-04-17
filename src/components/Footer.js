import React from "react";
var FontAwesome = require("react-fontawesome");

const Footer = (props) => {
  const { footer_data } = props;
  const data = footer_data.right;
  //   console.log(data);

  return (
    <footer className="footer">
      <div className="footer__left">
        <h3 className="footer__left__content">&copy;{footer_data.left[0]}</h3>
      </div>

      <div className="footer__right">
        <div className="footer__right__socialmedia">
          {Object.keys(data).map((key) => {
            console.log(data[key].icon_data);
            return (
              <a
                href={data[key].url}
                className="footer__right__socialmedia__link"
                key={key}
                target="_blank"
              >
                <FontAwesome
                  className="footer__right__socialmedia__item"
                  name={data[key].icon_data}
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
