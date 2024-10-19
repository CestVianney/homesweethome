import React from "react";
import "./InfoBlock.css"; // Importer le fichier CSS pour le style

const InfoBlock = ({ title, value, unit, icon, size }) => {
    return (
        <div className={`info-block ${size}`}>
            <div className="icon">{icon}</div>
            <div className="info">
                <h3 className="title">{title}</h3>
                <p className="value">{value} {unit}</p>
            </div>
        </div>
    );
};

export default InfoBlock;
