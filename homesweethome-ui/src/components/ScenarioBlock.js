import React from "react";
import "./ScenarioBlock.css"; // Assurez-vous de créer un fichier CSS pour le style
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";

const ScenarioBlock = () => {
  return (
    <div className="scenario-block">
      <div className="titre-controle-scenario">
        <h2>Contrôle des Scénarios</h2>
      </div>
      <div className="button-container">
        <button
          className="scenario-button"
        >
          <GiNightSleep size={60} />
        </button>
        <button
          className="scenario-button"
        >
          <CiSun size={70} />
        </button>
        <button
          className="scenario-button"
        >
          <FaRegMoon size={60} />
        </button>
      </div>
    </div>
  );
};

export default ScenarioBlock;
