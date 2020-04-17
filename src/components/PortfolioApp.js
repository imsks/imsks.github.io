import React from "react";
import Header from "./Header";
import Data from "../Data/Portfolio.data.json";
import AboutMe from "./AboutMe";
import Ventures from "./Ventures";
import Blogs from "./Blogs";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

export default class VirestoreApp extends React.Component {
  render() {
    return (
      <div>
        <Header header_data={Data.header_data} />
        <AboutMe about_data={Data.about_me} />
        <Ventures ventures_data={Data.my_ventures} />
        <Blogs blogs_data={Data.my_blogs} />
        <Skills skills_data={Data.my_skills} />
        <Contact contact_data={Data.contact_me} />
        <Footer footer_data={Data.footer} />
      </div>
    );
  }
}
