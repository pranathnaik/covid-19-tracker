import React from "react";
import { Bar } from "react-chartjs-2";

const Barc = (props) => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Active", "Cases", "Deaths", "Recovered"],
          datasets: [
            {
              label: `No of `,
              data: [
                props.data.active,
                props.data.cases,
                props.data.deaths,
                props.data.recovered,
              ],
              backgroundColor: ["yellow", "pink", "red", "green"],
            },
          ],
        }}
        height={400}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default Barc;
