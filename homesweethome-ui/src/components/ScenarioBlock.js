import React, { useState } from "react";
import "./ScenarioBlock.css"; // Assurez-vous de créer un fichier CSS pour le style
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { IoBulbOutline } from "react-icons/io5";

const ScenarioBlock = () => {
  const [lastScenario, setLastScenario] = useState("none");
  
  return (
    <div className="block">
      <div className="block-top">
        <div className="block-top-illu">
        <IoBulbOutline size={50} />
        </div>
        <div className="block-top-title">
          <h2>Contrôle des Scénarios</h2>
          <h3>Scénario sélectionné : <span className="special-text">{lastScenario}</span></h3>
        </div>
      </div>
      <div className="block-central">
      <div className="button-container">
        <button
          className="scenario-button"
          onClick={() => setLastScenario("Mode jour")}
        >
          <CiSun size={70} />
        </button>
        <button
          className="scenario-button"
          onClick={() => setLastScenario("Mode soir")}
        >
          <FaRegMoon size={60} />
        </button>
        <button
          className="scenario-button"
          onClick={() => setLastScenario("Mode nuit")}
        >
          <GiNightSleep size={60} />
        </button>
      </div>
      </div>
    </div>
  );
};

export default ScenarioBlock;
