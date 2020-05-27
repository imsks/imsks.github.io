import React from "react";
import Data from "../data/Portfolio.data.json";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// import "./aboutMe.styles.scss";

const ContactPage = () => {
  // console.log("ss");
  return (
    <main className="about__page">
      <Header header_data={Data.header_data} />
      <div className="about__page__content">
        <Contact contact_data={Data.contact_me} />
      </div>
      <Footer footer_data={Data.footer} />
    </main>
  );
};

export default ContactPage;
