import React from "react";
import Navigation from "./Navigation";

const Header = (props) => (
  <header>
    <div className="header">
      {/* 1. Logo */}
      <div className="header__logo">
        <span className="header__logo__text">
          {props.header_data.logo_name}
        </span>
      </div>

      {/* 2. Status Button */}
      <div className="header__status">
        <span className="header__status__style"></span>
      </div>

      {/* 3. Navigation */}
      <Navigation link_data={props.header_data.navigation_links} />
    </div>

    {/* Content Starts Here */}
    <div className="header__content">
      <h1 className="header__content__heading heading-primary--main">
        {props.header_data.introduction_data.name}
      </h1>
      <h3 className="header__content__heading heading-primary--sub">
        {props.header_data.introduction_data.profession}
      </h3>
    </div>
  </header>
);

export default Header;
