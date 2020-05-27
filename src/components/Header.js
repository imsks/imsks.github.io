import React from "react";
import { Link } from "react-router-dom";
// import Location from "../Data/Link.data";
import PortfolioData from "../data/Portfolio.data.json";

import Navigation from "./Navigation";

const Header = (props) => {
  const currLoc = window.location.pathname;

  const { home, status } = PortfolioData.slugs;

  // console.log(home);
  return (
    <header>
      <div className="header">
        {/* 1. Logo */}
        <Link to={home} style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <span className="header__logo__text">
              {props.header_data.logo_name}
            </span>
          </div>
        </Link>

        {/* 2. Status Button */}
        <Link to={status}>
          <div className="header__status">
            <div className="header__status__style"></div>
          </div>
        </Link>

        {/* 3. Navigation */}
        <Navigation link_data={props.header_data.navigation_links} />
      </div>

      {/* Content Starts Here */}
      {currLoc === home ? (
        <div className="header__content">
          <h1 className="header__content__heading heading-primary--main">
            {props.header_data.introduction_data.name}
          </h1>
          <h3 className="header__content__heading heading-primary--sub">
            {props.header_data.introduction_data.profession}
          </h3>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
