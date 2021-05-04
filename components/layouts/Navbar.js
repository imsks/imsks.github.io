import React from "react";
import Link from "next/link";
import { NavbarHead, Logo, LogoDot } from "style-components/layout/navigation";
import NavbarData from "Data/navbar.data.json";

const Navbar = () => {
  const { logo, hamburgerLinks } = NavbarData.data;
  return (
    <NavbarHead>
      <Logo href={logo.slug} margin="1rem 0 0 3rem">
        {logo.text}
        <LogoDot />
      </Logo>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="nav-toggle"
        />

        <label htmlFor="nav-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            {hamburgerLinks.map((link, key) => {
              return (
                <li className="navigation__item" key={key}>
                  <Link href={link.slug}>
                    <a className="navigation__link">{link.text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </NavbarHead>
  );
};

export default Navbar;
