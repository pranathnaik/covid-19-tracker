import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import GlobalView from "./Components/GlobalView";
import SelectView from "./Components/SelectView";
import Barc from "./Components/BarC";
const App = () => {
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    async function getData() {
      const global = await axios.get(`https://disease.sh/v3/covid-19/all`);
      setGlobalData(global.data);
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <GlobalView
        active={globalData.active}
        cases={globalData.cases}
        deaths={globalData.deaths}
        recovered={globalData.recovered}
      />
      <SelectView />
    </>
  );
};
export default App;