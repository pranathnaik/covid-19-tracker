import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
const App = () => {
  const [state, setstate] = useState();
  const active = state.data;
  useEffect(() => {
    async function getData() {
      const data = await axios.get(`https://disease.sh/v3/covid-19/all`);

      setstate(data);
      console.log(data);
    }

    getData();
  });

  return (
    <>
      <h2>active cases {active}</h2>
      {/* <h2>cases {state.data.cases}</h2>
      <h2>deaths {state.data.deaths}</h2>
      <h2>recovered {state.data.recovered}</h2> */}

      <select>
        <option></option>
        <option></option>
        <option></option>
      </select>
    </>
  );
};

export default App;
