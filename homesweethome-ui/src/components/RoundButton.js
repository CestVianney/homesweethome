import React from 'react';
import './RoundButton.css'; // Importer le fichier CSS pour le style



const RoundButton = ({ image, altText }) => {
    return (
        <button className="round-button">
            <img src={image} alt={altText} />
        </button>
    );
};

export default RoundButton;