import React from "react";

const Contact = (props) => {
  const { contact_data } = props;
  //   console.log(contact_data.form_content);
  return (
    <section className="contact">
      <div className="contact__header">
        <h1 className="contact__header__heading heading-primary--main">
          {contact_data.heading}
        </h1>
        <p className="contact__header__subheading heading-primary--main">
          {contact_data.sub_heading}
        </p>
      </div>

      <div className="contact__content">
        <form action="#" className="contact__form">
          <p className="contact__form__label">{contact_data.form_content[0]}</p>
          <input type="text" className="contact__form__input" />
          <p className="contact__form__label">{contact_data.form_content[1]}</p>
          <input type="email" className="contact__form__input" />
          <p className="contact__form__label">{contact_data.form_content[2]}</p>
          <textarea className="contact__form__input" id="message"></textarea>

          <a href="#" className="btn contact__form__submit" type="submit">
            {contact_data.form_content[3]}
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
