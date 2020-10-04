import React from "react";
import PortfolioData from "../data/Portfolio.data.json";
import StatusData from "../Data/Status.data.json";

import Header from "../components/Header";
import StatusTab from "../components/status/StatusTab";

export default class Status extends React.Component {
  render() {
    const currently_upto_items = StatusData.currently_upto;
    const i_loved__item = StatusData.i_loved;
    return (
      <main className="status">
        <Header header_data={PortfolioData.header_data} />
        <div className="status__content">
          <div className="status__content__content">
            <div className="status__content__items">
              {/* Accordion comes here */}
              {Object.keys(currently_upto_items).map((key, id) => {
                return (
                  <StatusTab
                    key={id}
                    uid={key}
                    status_head={key}
                    status_data={currently_upto_items[key]}
                    className="status__content__items__item"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
