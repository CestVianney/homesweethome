import React, { useState } from "react";
import "./ScenarioBlock.css"; 
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa6";
import { GiNightSleep } from "react-icons/gi";
import { IoBulbOutline } from "react-icons/io5";

const ScenarioBlock = () => {
  const [lastScenario, setLastScenario] = useState("none");
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (scenario) => {
    setLastScenario(scenario);
    setActiveButton(scenario);
  };

  return (
    <div className="block">
      <div className="block-top">
        <div className="block-top-illu">
          <IoBulbOutline size={50} />
        </div>
        <div className="block-top-title">
          <h2>Contrôle des Scénarios</h2>
          <h3>
            Scénario sélectionné :{" "}
            <span className="special-text">{lastScenario}</span>
          </h3>
        </div>
      </div>
      <div className="block-central">
        <div className="button-container">
          <button
            className={`scenario-button ${
              activeButton === "Mode jour" ? "active" : ""
            }`} 
            onClick={() => handleButtonClick("Mode jour")}
          >
            <CiSun size={70} />
          </button>
          <button
            className={`scenario-button ${
              activeButton === "Mode soir" ? "active" : ""
            }`} 
            onClick={() => handleButtonClick("Mode soir")}
          >
            <FaRegMoon size={60} />
          </button>
          <button
            className={`scenario-button ${
              activeButton === "Mode nuit" ? "active" : ""
            }`} 
            onClick={() => handleButtonClick("Mode nuit")}
          >
            <GiNightSleep size={60} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScenarioBlock;
