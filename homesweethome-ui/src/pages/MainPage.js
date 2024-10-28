import React from "react";
import TemperatureBlock from "../components/TemperatureBlock";
import Apartment3D from "../components/Apartment3D";
import "./MainPage.css";
import ScenarioBlock from "../components/ScenarioBlock";
import ActualTemp from "../components/ActualTemp";
import CryptoBlock from "../components/CryptoBlock";
import MagicCardBlock from "../components/MagicCardBlock";

const MainPage = () => {
  const currentTemperature = 22;
  const hourlyTemperatures = [
    21, 22, 23, 24, 22, 20, 21, 23, 24, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16,
    15, 16, 17, 18, 19,
  ];

  return (
    <div className="main-page">
      <TemperatureBlock
        currentTemp={currentTemperature}
        hourlyTemps={hourlyTemperatures}
      />
      <ActualTemp
        lat={49.495124}
        lon={0.105306}
        apiKey={"4b819bbf37d3707ebf1c71110b9f1786"}
      />
      <Apartment3D />
      <ScenarioBlock />
      <CryptoBlock />
      <MagicCardBlock />
    </div>
  );
};

export default MainPage;
