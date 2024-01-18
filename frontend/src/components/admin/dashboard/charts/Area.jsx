import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

function Area({ areaData }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Everyday Based Earning Bar Chart ($)",
      },
    },
  };

  let labels = areaData.map((item) => item.data);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Date And Earning ($)",
        data: areaData.map((item) => item.price),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(0,0,0, 0.2)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default Area;
