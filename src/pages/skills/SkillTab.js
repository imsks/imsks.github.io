import React from "react";

const StatusTab = (props) => {
  const { certificate_data } = props;
  // console.log(status_data, status_head);
  return (
    <div>
      {
        <div className="tab">
          <input type="checkbox" id={5} className="status__content__checkbox" />
          <label className="tab-label" htmlFor={5}>
            {certificate_data[0]}
          </label>
          <div className="tab__content skills__page_certificate_data">
            <div className="tab__content__items">
              {certificate_data.map((key, id, el) => {
                // console.log(id, el, key);
                return id != 0 ? (
                  <img
                    src={key}
                    className="tab__content__item skills__page__certificate__data__image"
                    key={key}
                  />
                ) : (
                  ""
                );
              })}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default StatusTab;
