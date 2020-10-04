import React, { Component } from "react";

import { messageRef } from "../database/Firestore";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    buttonText: "Send us",
    error: null,
  };

  handleFormData = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: "Sending...",
    });

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    messageRef
      .add(data)
      .then((result) => {
        this.setState({
          buttonText: "Sent! I'll connect to you soon.",
        });
        setTimeout(() => {
          this.setState({
            buttonText: "Send us",
          });
        }, 5000);
      })
      .catch((err) => {
        alert("Error submitting. If urgent send a mail or give a call.");
      });
  };

  render() {
    // console.log(this.state);
    const { contact_data } = this.props;
    // console.log(this.props);
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
          <form
            action="#"
            className="contact__form"
            onSubmit={this.handleSubmit}
          >
            <p className="contact__form__label">
              {contact_data.form_content[0]}
            </p>
            <input
              type="text"
              className="contact__form__input"
              onChange={this.handleFormData}
              id="name"
              required
            />
            <p className="contact__form__label">
              {contact_data.form_content[1]}
            </p>
            <input
              type="email"
              className="contact__form__input"
              onChange={this.handleFormData}
              id="email"
              required
            />
            <p className="contact__form__label">
              {contact_data.form_content[2]}
            </p>
            <textarea
              className="contact__form__input"
              id="message"
              onChange={this.handleFormData}
              id="message"
              required
            ></textarea>
            <input
              type="submit"
              className="btn contact__form__submit"
              value={this.state.buttonText}
            />
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
