import React from "react";

const Blogs = (props) => {
  const { blogs_data } = props;
  const data = blogs_data.data;

  return (
    <section className="blog">
      <h1 className="blog__heading heading-primary--main u-center-text">
        {blogs_data.heading}
      </h1>
      <div className="blog__content">
        {Object.keys(data).map((key) => {
          return (
            <div className="blog__card" key={key}>
              <img src={data[key].image_url} className="blog__card__image" />
              <h3 className="blog__card__title">{data[key].title}</h3>
              <a href="#" className="btn blog__card__link">
                Read Blog
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
