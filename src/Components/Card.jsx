// CryptocurrencyItem.js
import React from "react";

function Card({ crypto }) {
  return (
   

    <div className="p-4 w-1/5 h-40 bg-blue-300 rounded-lg shadow-md grid grid-rows-1 grid-cols-4 cursor-pointer">
      <div className=" flex items-center justify-center">

      <img src={crypto.image} alt={`${crypto.name} logo`} className="w-12 h-12 " />
      </div>
      <div className="flex w-60 flex-col justify-between grid-cols-5">

        <h2 className="font-bold w-60 ">{crypto.name}</h2>
        <h2 className=" w-60 text-gray-600">Price : ${crypto.current_price}</h2>
        <h2 className="font-bold"> Symbol : {crypto.symbol} </h2>

        <h2 className={crypto.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}>
          {crypto.price_change_percentage_24h}%
        </h2>
      
      </div>
    </div>
    
  );
}

export default Card;
