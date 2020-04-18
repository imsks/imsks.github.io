import React from "react";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    return (
      <main className="body__status">
        <div>
          <h1>Status</h1>
          <Link to="/">Home</Link>
        </div>
      </main>
    );
  }
}
