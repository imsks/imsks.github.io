import React from "react";

const StatusTab = (props) => {
  const { uid, status_head, status_data } = props;
  // console.log(status_data, status_head);
  return (
    <div>
      {
        <div className="tab">
          <input type="checkbox" id={uid} />
          <label className="tab-label" htmlFor={uid}>
            {status_head}
          </label>
          <div className="tab__content">
            {Object.keys(status_data).map((key) => {
              // console.log(currently_upto_items[key], key);
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
