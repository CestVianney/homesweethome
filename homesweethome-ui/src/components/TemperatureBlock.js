// src/components/TemperatureBlock.js
import React from "react";
import { Line } from "react-chartjs-2"; // Assurez-vous d'avoir installé react-chartjs-2
import { Chart, registerables } from 'chart.js'; // Importer Chart et registerables
import "./TemperatureBlock.css"; // Importer le fichier CSS pour le style

// Enregistrer les composants nécessaires de Chart.js
Chart.register(...registerables);

const TemperatureBlock = ({ currentTemp, hourlyTemps }) => {
    // Calculer la température moyenne
    const averageTemp = (hourlyTemps.reduce((acc, temp) => acc + temp, 0) / hourlyTemps.length).toFixed(2);

    // Préparer les données pour le graphique
    const currentHour = new Date().getHours();
    const labels = [];
    for (let i = 0; i < 24; i++) {
        const hour = (currentHour - i + 24) % 24; // Récupérer les heures précédentes
        labels.push(`${hour}:00`);
    }

    const data = {
        labels: labels.reverse(), // Inverser les étiquettes pour afficher de 18h à 18h
        datasets: [
            {
                label: "Température sur 24h",
                data: hourlyTemps.reverse(), // Inverser les données pour correspondre aux étiquettes
                fill: false,
                borderColor: "rgba(75, 192, 192, 1)",
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="temperature-block">
            <h2>Température Actuelle</h2>
            <p>{currentTemp} °C</p>
            <h3>Température Moyenne: {averageTemp} °C</h3>
            <Line data={data} />
        </div>
    );
};

export default TemperatureBlock;
