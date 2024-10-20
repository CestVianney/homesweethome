import React, { useState, useEffect } from "react";
import "./HorizontalBar.css"; 
import RoundButton from "./RoundButton";
import CaddieLogo from "../assets/logo/caddie.png";
import HomeLogo from "../assets/logo/home.svg"
import { Link } from "react-router-dom";

const HorizontalBar = ({ blockVisibility, setBlockVisibility }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }));
      setCurrentDate(now.toLocaleDateString("fr-FR", {
        weekday: "long", // Nom du jour
        year: "numeric", // Année
        month: "long", // Mois
        day: "numeric" // Jour
      }));
    };

    updateTimeAndDate(); // Mettre à jour l'heure et la date au démarrage
    const intervalId = setInterval(updateTimeAndDate, 1000); // Mettre à jour chaque seconde

    return () => clearInterval(intervalId); // Nettoyer l'intervalle à la désactivation du composant
  }, []);

  return (
    <div className="horizontal-bar">
      <div className="home">
        <Link to="/">
          <RoundButton image={HomeLogo} altText={"Home"} />
        </Link>
      </div>
      <div className="tima-and-date">
      <div className="date-display">{currentDate}</div>
      <div className="time-display">{currentTime}</div>
      </div>
      <div className="buttons">
        <Link to="/groceries">
          <RoundButton image={CaddieLogo} altText={"Shop"} />
        </Link>
      </div>
    </div>
  );
};

export default HorizontalBar;
