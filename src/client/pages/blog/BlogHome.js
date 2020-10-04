import React from "react";
import Data from "../../data/Portfolio.data.json";
import Header from "../../components/Header";
import Blogs from "../../components/Blogs";

const BlogHome = () => {
  return (
    <main className="about__page">
      <Header header_data={Data.header_data} />
      <div className="about__page__content">
        <Blogs blogs_data={Data.my_blogs} />
      </div>
    </main>
  );
};

export default BlogHome;
