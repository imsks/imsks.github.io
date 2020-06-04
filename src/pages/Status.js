import React from "react";
import PortfolioData from "../data/Portfolio.data.json";
import StatusData from "../Data/Status.data.json";

import Header from "../components/Header";
import StatusTab from "../components/status/StatusTab";

export default class Status extends React.Component {
  render() {
    const currently_upto_items = StatusData.currently_upto;
    const i_loved__item = StatusData.i_loved;
    // console.log(History);
    return (
      <main className="status">
        <Header header_data={PortfolioData.header_data} />
        <div className="status__content">
          <div className="status__content__left">
            <div className="status__content__left__content">
              <h3 className="status__content__left__heading">Currently Upto</h3>
              <div className="status__content__left__items">
                {/* Accordion comes here */}
                {Object.keys(currently_upto_items).map((key, id) => {
                  console.log(currently_upto_items[key], key);
                  return (
                    <StatusTab
                      key={id}
                      uid={key}
                      status_head={key}
                      status_data={currently_upto_items[key]}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="status__content__right">
            <div className="status__content__right__content">
              <h3 className="status__content__right__heading">I loved</h3>
              <div className="status__content__right__items">
                {/* Accordion comes here */}
                {Object.keys(i_loved__item).map((key, id) => {
                  // console.log(currently_upto_items[key], key);
                  return (
                    <StatusTab
                      key={id}
                      uid={key}
                      status_head={key}
                      status_data={i_loved__item[key]}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="status__content__bottom">
            <h3 className="status__content__bottom__content">
              Currently I am in: {StatusData.current_location}
            </h3>
          </div>
        </div>
      </main>
    );
  }
}
