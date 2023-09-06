import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Heading from "./Components/Heading";
import Shimmer from "./Components/Shimmer";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&locale=en";

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

  if (cryptoData.length === 0 ) return (
  <div>
    <Heading />
      <div className="my-3 gap-5 flex flex-wrap justify-center items-center">
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
        <Shimmer/>
      </div>

  </div>
  );
  return (

    <div >
      <Heading />
      <div className="my-3 gap-5 flex flex-wrap justify-center items-center">
        {cryptoData.map((crypto) => (
          <Card key={crypto.id} crypto={crypto} />
        ))}

  
      </div>
    </div>
  );
}

export default App;
