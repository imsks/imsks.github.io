import React from "react";

const Navigation = (props) => {
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
            return (
              <li className="navigation__item" key={element}>
                <a className="navigation__link">{element}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
