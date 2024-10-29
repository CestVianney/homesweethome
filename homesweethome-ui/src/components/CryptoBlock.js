import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CryptoBlock.css";
import { IoLogoBitcoin } from "react-icons/io5";

const CryptoBlock = () => {
  const [tokens, setTokens] = useState([]);
  const tokenIds = ["bitcoin", "ethereum", "fantom", "solana"];

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = 
        await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets`,
          {
            params: {
              vs_currency: "usd",
              ids: tokenIds.join(","),
              order: "market_cap_desc",
              per_page: 4,
              page: 1,
              sparkline: false,
            },
          }
        );
        setTokens(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchTokenData();
  }, []);

  const fantomMarketCap = tokens.find(token => token.id === "fantom")?.market_cap;


  return (
    <div className="block">
      <div className="block-top">
      <div className="block-top-illu">
        <IoLogoBitcoin size={30} color="#ffcd58" />
        </div>
        <div className="block-top-title">
        <h2>Evolution des prix</h2>
        <h3>Mcap FTM : <span className="special-text">{fantomMarketCap ?  `$${fantomMarketCap.toLocaleString()}` : "Chargement..."}</span></h3>
        </div>
      </div>
      <div className="grid">
        {tokens.map((token) => (
          <div key={token.id} className="grid-item">
            <img src={token.image} alt={token.name} className="token-logo" />
            <h4 className="token-name special-text">{token.market_cap_rank} - {token.name}</h4>
            <p className="secondary-text">Prix actuel: ${token.current_price}</p>
            <p className="special-text">
              Evolution 24h:{" "}
              <span
                style={{
                  color: token.price_change_percentage_24h >= 0 ? "#4caf50" : "#ff5722",
                }}
              >
                {token.price_change_percentage_24h.toFixed(2)}%
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoBlock;
