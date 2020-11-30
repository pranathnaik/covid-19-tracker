import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
const SelectView = () => {
  const [jsData, setData] = useState({});
  const [Countries, setCountries] = useState([{}]);
  const [countryval, setCountryval] = useState("");
  useEffect(() => {
    async function data(event) {
      const { data } = await axios.get(
        `https://disease.sh/v3/covid-19/countries/${countryval}`
      );
      const countries = await axios.get(`https://restcountries.eu/rest/v2/all`);
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
        <select value={countryval} onChange={selectChange}>
          {Countries.map((value) => {
            return <option>{value.name}</option>;
          })}
        </select>
      </div>
      <h2>country {jsData.country}</h2>
      <h2>active cases {jsData.active}</h2>
      <h2>cases {jsData.cases}</h2>
      <h2>deaths {jsData.deaths}</h2>
      <h2>recovered {jsData.recovered}</h2>
    </div>
  );
};

export default SelectView;
