import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class HomePage extends Component {
  head() {
    return (
      <Helmet>
        <title>Home Page</title>
      </Helmet>
    );
  }

  render() {
    return (
      <section className="homePage_wrap">
        {this.head()}
        <h1>HOMEPAGE</h1>
        <Link to="/test">
          <span>TESTING</span>
        </Link>
      </section>
    );
  }
}

export default {
  component: HomePage,
};
