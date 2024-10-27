import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./TemperatureBlock.css";
import { FaTemperatureHigh } from "react-icons/fa6";

Chart.register(...registerables);

const TemperatureBlock = ({ currentTemp, hourlyTemps }) => {
  const averageTemp = (
    hourlyTemps.reduce((acc, temp) => acc + temp, 0) / hourlyTemps.length
  ).toFixed(2);

  const currentHour = new Date().getHours();
  const labels = [];
  for (let i = 0; i < 24; i++) {
    const hour = (currentHour - i + 24) % 24;
    labels.push(`${hour}:00`);
  }

  const data = {
    labels: labels.reverse(),
    datasets: [
      {
        label: "Température",
        data: hourlyTemps.reverse(),
        fill: true,
        borderColor: "#ffcd58",
        backgroundColor: "rgba(255, 205, 88, 0.1)",
        pointBorderColor: "#ffcd58",
        pointBackgroundColor: "#2b2b3d",
        pointRadius: 5,
        borderWidth: 2,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#a3a3bf",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#a3a3bf",
          beginAtZero: true,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="block">
      <div className="block-top">
        <div className="block-top-illu">
          <FaTemperatureHigh size={50} />
        </div>
        <div className="block-top-title">
          <h2>Température Intérieure</h2>
          <h3>Température actuelle : <span className="special-text">{currentTemp} °C</span></h3>
        </div>
      </div>
      <div className="block-central">
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TemperatureBlock;
