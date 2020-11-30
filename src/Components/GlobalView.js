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
          <h2>active cases </h2>
          <div>{props.active}</div>
        </div>
        <div className="items">
          <h2>cases </h2>
          <div>{props.cases}</div>
        </div>
        <div className="items">
          <h2>deaths </h2>
          <div>{props.deaths}</div>
        </div>
        <div className="items">
          <h2>recovered </h2>
          <div>{props.recovered}</div>
        </div>
      </div>
    </div>
  );
};

export default GlobalView;
