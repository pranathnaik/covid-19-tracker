import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
const App = () => {
  const [jsData, setData] = useState({});

  const [countryval, setCountryval] = useState("");

  const [Countries, setCountries] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(
        `https://disease.sh/v3/covid-19/countries/${countryval}`
      );
      const countries = await axios.get(`https://restcountries.eu/rest/v2/all`);

      setData(data);
      setCountries(countries.data);

      console.log(countries.data);
    }

    getData();
  }, [countryval]);

  const selectChange = (event) => {
    setCountryval(event.target.value);
    console.log(countryval);
  };

  return (
    <>
      <Header />
      {console.log(jsData)}
      <h2>country {jsData.country}</h2>
      <h2>active cases {jsData.active}</h2>
      <h2>cases {jsData.cases}</h2>
      <h2>deaths {jsData.deaths}</h2>
      <h2>recovered {jsData.recovered}</h2>

      <select value={countryval} onChange={selectChange}>
        {Countries.map((value) => {
          return <option>{value.name}</option>;
        })}
      </select>
    </>
  );
};
export default App;
