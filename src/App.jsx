import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Heading from "./Components/Heading";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&locale=en";

  useEffect(() => {
    fetchData(API);
  }, []);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data fetch", data);
      setCryptoData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex h-full w-full justify-center items-center bg-red-100">
      <Heading />
      <div className="flex flex-wrap justify-center items-center">
        {cryptoData.map((crypto) => (
          <Card key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  );
}

export default App;
