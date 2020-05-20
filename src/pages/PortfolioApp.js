import React from "react";
import Data from "../data/Portfolio.data.json";

import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Ventures from "../components/Ventures";
import Blogs from "../components/Blogs";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default class PortfolioApp extends React.Component {
  render() {
    // console.log(typeof Data.header_data.logo_name);
    return (
      <main>
        <Header header_data={Data.header_data} />
        <AboutMe about_data={Data.about_me} />
        <Ventures ventures_data={Data.my_ventures} />
        <Blogs blogs_data={Data.my_blogs} />
        <Skills skills_data={Data.my_skills} />
        <Contact contact_data={Data.contact_me} />
        <Footer footer_data={Data.footer} />
      </main>
    );
  }
}
