// CryptocurrencyItem.js
import React from "react";

function Card({ crypto }) {
  return (
    <div className="flex justify-center content-center flex-col ">

    <div className="p-4 w-96 h-32 bg-blue-300 rounded-lg shadow-md grid grid-rows-1 grid-cols-4 cursor-pointer">
      <div className=" flex items-center justify-center">

      <img src={crypto.image} alt={`${crypto.name} logo`} className="w-12 h-12 " />
      </div>
      <div >
      <div className="text-xl flex flex-row justify-between ">

        <h2 className=" font-bold">{crypto.name}</h2>
        <span className=" text-gray-600">${crypto.current_price}</span>
      </div>
        <div>
        <span> {crypto.symbol} </span>

        <span className={crypto.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}>
          {crypto.price_change_percentage_24h}%
        </span>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
