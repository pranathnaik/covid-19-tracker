import React, { useState, useEffect } from "react";
import "../App.css";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import Select from "@material-ui/core/Select";
const SelectView = () => {
  const [jsData, setData] = useState({});
  const [Countries, setCountries] = useState([{}]);
  const [countryval, setCountryval] = useState("Afghanistan");
  useEffect(() => {
    async function data(event) {
      const { data } = await axios.get(
        `https://disease.sh/v3/covid-19/countries/${countryval}`
      );
      const countries = await axios.get(
        `https://disease.sh/v3/covid-19/countries`
      );

      setCountries(countries.data);
      setData(data);
    }
    data();
  }, [countryval]);

  const selectChange = (event) => {
    setCountryval(event.target.value);
  };

  return (
    <div className="globalcontainer">
      <div className="global-title">
        <Select className="hi" value={countryval} onChange={selectChange}>
          {Countries.map((value) => {
            return (
              <MenuItem className="bye" value={value.country}>
                {value.country}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <div className="global-items">
        <div className="items">
          <div className="title-global">
            <h2>Active cases </h2>
          </div>

          <div className="title-global-value">{jsData.active}</div>
        </div>
        <div className="items">
          <div className="title-global">
            <h2>Cases </h2>
          </div>
          <div className="title-global-value">{jsData.cases}</div>
        </div>
        <div className="items">
          <div className="title-global">
            <h2>Deaths </h2>
          </div>
          <div className="title-global-value">{jsData.deaths}</div>
        </div>
        <div className="items">
          <div className="title-global">
            <h2>Recovered </h2>
          </div>
          <div className="title-global-value">{jsData.recovered}</div>
        </div>
      </div>
    </div>
  );
};

export default SelectView;
