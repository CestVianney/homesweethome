import React from "react";
import TemperatureBlock from "../components/TemperatureBlock";
import Apartment3D from "../components/Apartment3D";
import GridLayout from "react-grid-layout";
import "./MainPage.css";

const MainPage = () => {
    const currentTemperature = 22; // Température actuelle
    const hourlyTemperatures = [
        21, 22, 23, 24, 22, 20, 21, 23, 24, 25,
        24, 23, 22, 21, 20, 19, 18, 17, 16, 15,
        16, 17, 18, 19,
    ]; // Températures des dernières 24 heures

    var layout = [
        { i: "temperatureBlock", x: 0, y: 0, w: 4, h: 4 },
        { i: "temperatureBlock2", x: 0, y: 0, w: 4, h: 4 },
        { i: "temperatureBlock3", x: 0, y: 0, w: 4, h: 4 },
        { i: "temperatureBlock4", x: 0, y: 0, w: 4, h: 4 },
        { i: "temperatureBlock5", x: 0, y: 0, w: 4, h: 4 },
        { i: "apartment3D", x: 3, y: 0, w: 4, h: 4, minH: 4, minW: 4}, 
    ];

    return (
        <div className="main-page">
            <GridLayout
                className="layout"
                layout={layout}
                cols={12}
                rowHeight={90}
                width={1200}
            >
                <div key="temperatureBlock">
                    <TemperatureBlock currentTemp={currentTemperature} hourlyTemps={hourlyTemperatures} />
                </div>
                <div key="temperatureBlock2">
                    <TemperatureBlock currentTemp={currentTemperature} hourlyTemps={hourlyTemperatures} />
                </div>
                <div key="temperatureBlock3">
                    <TemperatureBlock currentTemp={currentTemperature} hourlyTemps={hourlyTemperatures} />
                </div>
                <div key="temperatureBlock4">
                    <TemperatureBlock currentTemp={currentTemperature} hourlyTemps={hourlyTemperatures} />
                </div>
                <div key="temperatureBlock5">
                    <TemperatureBlock currentTemp={currentTemperature} hourlyTemps={hourlyTemperatures} />
                </div>
                <div key="apartment3D">
                    <Apartment3D />
                </div>
            </GridLayout>
        </div>
    );
};

export default MainPage;
