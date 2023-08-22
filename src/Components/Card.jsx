// CryptocurrencyItem.js
import React from "react";

function Card({ crypto }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img src={crypto.image} alt={`${crypto.name} logo`} className="w-12 h-12 mx-auto mb-2" />
      <div className="text-center">
        <h2 className="text-lg font-semibold">{crypto.name}</h2>
        <p className="text-gray-600">${crypto.current_price}</p>
        <p className={crypto.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}>
          {crypto.price_change_percentage_24h}%
        </p>
      </div>
    </div>
  );
}

export default Card;
