import React from "react";

const AboutMe = (props) => {
  return (
    <section className="about">
      <h1 className="heading-primary--main about__heading u-center-text">
        About Me
      </h1>
      {props.about_data.map((content) => {
        return (
          <p className="about__content" key={content}>
            {content}
          </p>
        );
      })}
    </section>
  );
};

export default AboutMe;
