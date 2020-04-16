import React from "react";
import Header from "./Header";
import Data from "../Data/Portfolio.data.json";
import AboutMe from "./AboutMe";
import Ventures from "./Ventures";

export default class VirestoreApp extends React.Component {
  render() {
    return (
      <div>
        <Header header_data={Data.header_data} />
        <AboutMe about_data={Data.about_me} />
        <Ventures ventures_data={Data.my_ventures} />
      </div>
    );
  }
}
