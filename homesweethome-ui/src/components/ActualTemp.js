import React, { useEffect, useState } from "react";
import "./ActualTemp.css";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";

const ActualTemp = ({ lat, lon, apiKey }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        const currentWeatherResponse = await fetch(currentWeatherUrl);
        const currentWeatherData = await currentWeatherResponse.json();
        setCurrentWeather(currentWeatherData);

        const iconCode = currentWeatherData.weather[0].icon;
        setWeatherIcon(
          `https://rodrigokamada.github.io/openweathermap/images/${iconCode}_t.png`
        );
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données météo:",
          error
        );
      }
    };

    fetchWeatherData();
  }, [lat, lon, apiKey]);

  if (!currentWeather) {
    return <div>Chargement des données météo...</div>;
  }

  const { temp, humidity } = currentWeather.main;
  const windSpeed = currentWeather.wind.speed;

  return (
    <div className="block">
      <div className="block-top">
        <div className="block-top-illu">
          <TiWeatherPartlySunny size={50}/>
        </div>
        <div className="block-top-title">
          {" "}
          <h2>Météo</h2>
          <h3>Le Havre - 76600</h3>
        </div>
      </div>
      <div className="block-central">
        <div className="main-weather">
          <img src={weatherIcon} alt="Weather icon" className="weather-icon" />
          <p className="temperature">{temp}°C</p>
        </div>
        <div className="weather-details">
          <p className="detail-item">
            <WiHumidity size={30} /> {humidity}% Humidité
          </p>
          <p className="detail-item">
            <FaWind size={30} /> {windSpeed} m/s Vent
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActualTemp;
