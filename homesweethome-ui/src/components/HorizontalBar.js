import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./HorizontalBar.css";

const HorizontalBar = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const updateTimeAndDate = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
            setCurrentDate(now.toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
        };

        updateTimeAndDate();
        const intervalId = setInterval(updateTimeAndDate, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="horizontal-bar">
            <Link to="/">
                <Fab color="white" aria-label="home">
                    <HomeIcon />
                </Fab>
            </Link>
            <div className="time-and-date">
                <div className="date-display"><span className="special-text">{currentDate}</span></div>
                <div className="time-display"><span className="secondary-text">{currentTime}</span></div>
            </div>

            <div className="buttons">
                <Link to="/groceries">
                    <Fab color="white" aria-label="courses">
                        <ShoppingCartIcon />
                    </Fab>
                </Link>
            </div>
        </div>
    );
};

export default HorizontalBar;
