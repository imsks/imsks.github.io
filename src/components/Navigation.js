import React from "react";
import { Link } from "react-router-dom";
import Slugify from "slugify";

const Navigation = (props) => {
  // console.log(props);
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav-toggle" />

      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          {props.link_data.map((element) => {
            const goToPage =
              Slugify(element.toLowerCase()) == "home"
                ? "/"
                : Slugify(element.toLowerCase());
            return (
              <li className="navigation__item" key={element}>
                <Link to={"/" + goToPage} className="navigation__link">
                  {element}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
