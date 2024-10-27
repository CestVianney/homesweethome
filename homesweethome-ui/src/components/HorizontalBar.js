import React, { useState, useEffect } from "react";
import "./HorizontalBar.css";
import RoundButton from "./RoundButton";
import CaddieLogo from "../assets/logo/caddie.png";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HorizontalBar = ({ blockVisibility, setBlockVisibility }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setCurrentDate(
        now.toLocaleDateString("fr-FR", {
          weekday: "long", // Nom du jour
          year: "numeric", // Année
          month: "long", // Mois
          day: "numeric", // Jour
        })
      );
    };

    updateTimeAndDate(); // Mettre à jour l'heure et la date au démarrage
    const intervalId = setInterval(updateTimeAndDate, 1000); // Mettre à jour chaque seconde

    return () => clearInterval(intervalId); // Nettoyer l'intervalle à la désactivation du composant
  }, []);

  return (
    <div className="horizontal-bar">
      <Link to="/">
        <Fab color="white" aria-label="home">
          <HomeIcon />
        </Fab>
      </Link>

      <div className="tima-and-date">
        <div className="date-display"><span className="special-text">{currentDate}</span></div>
        <div className="time-display"><span className="secondary-text">{currentTime}</span></div>
      </div>
      <div className="buttons">
        <Fab color="white" aria-label="courses">
          <ShoppingCartIcon />
        </Fab>
      </div>
    </div>
  );
};

export default HorizontalBar;
