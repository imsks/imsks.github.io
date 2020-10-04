import React from "react";

const StatusTab = (props) => {
  const { uid, status_head, status_data } = props;
  return (
    <div>
      {
        <div className="tab">
          <input
            type="checkbox"
            id={uid}
            className="status__content__checkbox"
          />
          <label className="tab-label" htmlFor={uid}>
            {status_head}
          </label>
          <div className="tab__content">
            {Object.keys(status_data).map((key) => {
              return (
                <ul className="tab__content__items" key={key}>
                  <li className="tab__content__item">{status_data[key]}</li>
                </ul>
              );
            })}
          </div>
        </div>
      }
    </div>
  );
};

export default StatusTab;
