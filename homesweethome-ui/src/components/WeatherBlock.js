import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2"; // Importation du graphique
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
} from "chart.js";
import "./WeatherBlock.css";
import { WiHumidity } from "react-icons/wi";
import { FiClock } from "react-icons/fi";
import { FaCircleArrowRight } from "react-icons/fa6";
import { GrSchedulePlay } from "react-icons/gr";
import { FaWind, FaTemperatureHigh } from "react-icons/fa";

// Enregistrement des composants Chart.js
Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement
);

const WeatherBlock = ({ lat, lon, apiKey }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [activeTab, setActiveTab] = useState(0); // Onglet actif
  const [backgroundClass, setBackgroundClass] = useState(""); // Classe de fond dynamique

  // Récupération des données météo actuelles et prévisions
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // API pour les données actuelles
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

        // Appels aux APIs
        const [currentWeatherResponse, forecastResponse] = await Promise.all([
          fetch(currentWeatherUrl),
          fetch(forecastUrl),
        ]);

        const currentWeatherData = await currentWeatherResponse.json();
        const forecastData = await forecastResponse.json();

        setCurrentWeather(currentWeatherData);
        setForecast(forecastData);

        // Mise à jour du fond dynamique
        updateBackgroundClass(currentWeatherData.weather[0].description);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données météo:",
          error
        );
      }
    };

    fetchWeatherData();
  }, [lat, lon, apiKey]);

  // Fonction pour mettre à jour la classe de fond
  const updateBackgroundClass = (description) => {
    const weatherDescription = description.toLowerCase();

    switch (weatherDescription) {
      case "clear sky":
        setBackgroundClass("clear-sky");
        break;
      case "few clouds":
        setBackgroundClass("few-clouds");
        break;
      case "scattered clouds":
        setBackgroundClass("scattered-clouds");
        break;
      case "broken clouds":
        setBackgroundClass("broken-clouds");
        break;
      case "overcast clouds":
        setBackgroundClass("overcast-clouds");
        break;
      case "light rain":
        setBackgroundClass("light-rain");
        break;
      case "shower rain":
        setBackgroundClass("shower-rain");
        break;
      case "rain":
        setBackgroundClass("rain");
        break;
      case "thunderstorm":
        setBackgroundClass("thunderstorm");
        break;
      case "snow":
        setBackgroundClass("snow");
        break;
      case "mist":
        setBackgroundClass("mist");
        break;
      default:
        setBackgroundClass("default");
    }
  };

  const getBackgroundClass = (description) => {
    const weatherDescription = description.toLowerCase();

    switch (weatherDescription) {
      case "clear sky":
        return "clear-sky";
      case "few clouds":
        return "few-clouds";
      case "scattered clouds":
        return "scattered-clouds";
      case "broken clouds":
        return "broken-clouds";
      case "shower rain":
        return "shower-rain";
      case "rain":
        return "rain";
      case "light rain":
        return "light-rain";
      case "thunderstorm":
        return "thunderstorm";
      case "overcast clouds":
        return "overcast-clouds";
      case "moderate rain":
        return "light-rain";
      case "snow":
        return "snow";
      case "mist":
        return "mist";
      default:
        return "default"; // Classe par défaut si aucune description ne correspond
    }
  };

  if (!currentWeather || !forecast) {
    return <div>Chargement des données météo...</div>;
  }

  // Extraction des données actuelles
  const { temp, humidity } = currentWeather.main;
  const windSpeed = currentWeather.wind.speed;
  const weatherDescription = currentWeather.weather[0].description;

  // Extraction des prévisions (premier jour)
  const todayForecast = forecast.list.slice(0, 8); // Les 8 premières tranches horaires pour le jour

  // Prévisions pour plusieurs jours (en prenant une prévision toutes les 24h)
  const dailyForecasts = forecast.list
    .filter((_, index) => index % 8 === 0)
    .slice(1, 5); // 4 prochains jours

  // Préparation des données pour le graphique du jour
  const todayLabels = todayForecast.map((item) =>
    new Date(item.dt_txt).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const tempData = todayForecast.map((item) => item.main.temp);
  const precipitationData = todayForecast.map(
    (item) => (item.rain && item.rain["3h"]) || 0
  );
  const windData = todayForecast.map((item) => item.wind.speed);

  const chartData = {
    labels: todayLabels,
    datasets: [
      {
        label: "Température (°C)",
        data: tempData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(255, 255, 0, 1)",
        yAxisID: "y",
        type: "line",
      },
      {
        label: "Précipitation (mm)",
        data: precipitationData,
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        yAxisID: "y1",
        type: "bar",
      },
      {
        label: "Vent (m/s)",
        data: windData,
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        yAxisID: "y2",
        type: "bar",
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          color: "black",
        },
      },
      y: {
        type: "linear",
        position: "left",
        beginAtZero: false,
        ticks: {
          color: "black",
        },
      },

      y1: {
        type: "linear",
        position: "right",
        beginAtZero: false,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: "black",
        },
      },
      y2: {
        type: "linear",
        position: "left",
        beginAtZero: false,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: "black",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "black",
        },
      },
    },
  };

  return (
    <div className={`weather-block ${backgroundClass}`}>
      {/* Barre d'onglets */}
      <div className="tabs">
        <button
          className={activeTab === 0 ? "active" : ""}
          onClick={() => setActiveTab(0)}
        >
          <FiClock size={40} />
        </button>
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => setActiveTab(1)}
        >
          <FaCircleArrowRight size={40} />
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => setActiveTab(2)}
        >
          <GrSchedulePlay size={40} />
        </button>
      </div>

      {/* Contenu des onglets */}
      <div className="tab-content">
        {activeTab === 0 && (
          <div className="current-weather">
            <div className="left-section">
              <p className="humid-wind">
                {" "}
                <WiHumidity size={40} /> {humidity}%
              </p>
              <p className="humid-wind">
                {" "}
                <FaWind size={30} /> {windSpeed} m/s
              </p>
            </div>
            <div className="right-section">
              <p className="temperature">{temp}°C</p>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="forecast-today">
            <Line data={chartData} options={chartOptions} />
          </div>
        )}

        {activeTab === 2 && (
          <div className="forecast-week">
            <div className="forecast-columns">
              {dailyForecasts.map((forecastItem, index) => {
                const backgroundClass = getBackgroundClass(
                  forecastItem.weather[0].description
                );
                return (
                  <div
                    key={index}
                    className={`forecast-item ${backgroundClass}`}
                  >
                    <p>{new Date(forecastItem.dt_txt).toLocaleDateString()}</p>
                    <p><FaTemperatureHigh size={30} color="white" /> {forecastItem.main.temp}°C</p>
                    <p><FaWind size={30} color="white" /> {forecastItem.wind.speed} m/s</p>
                    <p><WiHumidity size={30} color="white" /> : {forecastItem.main.humidity}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherBlock;
