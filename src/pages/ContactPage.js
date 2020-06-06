import React from "react";
import { Helmet } from "react-helmet";

import Data from "../data/Portfolio.data.json";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <main className="about__page">
      <Helmet>
        <title>Connect with me</title>
        <meta
          name="description"
          content="Let's get connected and share world changing ideas."
        />
        <meta
          name="keywords"
          content="connect with sachin shukla, connect with sachin, sachin shukla facebook, sachin shukla instagram, sachin shukla linkedin"
        />
      </Helmet>
      <Header header_data={Data.header_data} />
      <div className="about__page__content">
        <Contact contact_data={Data.contact_me} />
      </div>
      <Footer footer_data={Data.footer} />
    </main>
  );
};

export default ContactPage;
