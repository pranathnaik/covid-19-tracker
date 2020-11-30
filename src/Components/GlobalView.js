import React from "react";
import "../App.css";


const GlobalView = (props) => {
  return (
    <div className="globalcontainer">
      <div className="global-title">
        <p>Global COVID-19</p>
      </div>
      <div className="global-items">
        <div className="items">
          <div className="title-global">
            <h2>Active cases </h2>
          </div>

          <div className="title-global-value">{props.active}</div>
        </div>
        <div className="items">
          <div className="title-global">
            <h2>Cases </h2>
          </div>
          <div className="title-global-value">{props.cases}</div>
        </div>
        <div className="items">
          <div className="title-global">
            <h2>Deaths </h2>
          </div>
          <div className="title-global-value">{props.deaths}</div>
        </div>
        <div className="items">
          <div className="title-global">
            <h2>Recovered </h2>
          </div>
          <div className="title-global-value">{props.recovered}</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalView;
