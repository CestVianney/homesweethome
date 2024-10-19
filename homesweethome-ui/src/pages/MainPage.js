// src/pages/MainPage.js
import React from "react";
import TemperatureBlock from "../components/TemperatureBlock";
import { FaTemperatureHigh, FaTint, FaLightbulb, FaWind } from "react-icons/fa"; // Assurez-vous d'installer react-icons

const MainPage = () => {
    const currentTemperature = 22; // Température actuelle
    const hourlyTemperatures = [21, 22, 23, 24, 22, 20, 21, 23, 24, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 16, 17, 18, 19]; // Températures des dernières 24 heures

    return (
        <div className="main-page">
            <div className="grid-container">
            <TemperatureBlock currentTemp={currentTemperature} hourlyTemps={hourlyTemperatures} />

                {/* Ajoutez d'autres blocs selon les besoins */}
            </div>
        </div>
    );
};

export default MainPage;
