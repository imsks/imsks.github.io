// Start up point for client side app
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../assets/scss/styles.scss";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import webConfig from "./../../webConfig";
import Routes from "./routes";

const axiosInstance = axios.create({
  baseURL: webConfig.axiosInstance_baseURL,
});

ReactDOM.hydrate(
  <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
  </BrowserRouter>,
  document.querySelector("#root")
);
