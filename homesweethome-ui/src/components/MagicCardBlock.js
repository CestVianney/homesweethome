import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MagicCardBlock.css"; 
import { GiCardRandom } from "react-icons/gi";

const MagicCardBlock = () => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchRandomCard = async () => {
      try {
        const response = await axios.get("https://api.scryfall.com/cards/random");
        setCard(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération de la carte :", error);
      }
    };

    fetchRandomCard();
  }, []);

  if (!card) {
    return <div className="block">Chargement...</div>;
  }

  return (
    <div className="block">
      <div className="block-top">
        <div className="block-top-illu">
          <GiCardRandom size={50} />
        </div>
        <div className="block-top-title">
          <h2>Carte Magic du Jour</h2>
          <h3>{card.set_name} : <span className="special-text">{card.name}</span></h3>
        </div>
      </div>
      <div className="block-central">
        <img src={card.image_uris.small} alt={card.name} className="magic-card-image" />
        <p className="secondary-text">Type : {card.type_line}</p>
      </div>
    </div>
  );
};

export default MagicCardBlock;
