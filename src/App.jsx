import React, { useState, useEffect } from "react";
import Card from "./Components/Card";

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    fetchData(API);
  }, []);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data fetch" , data)
      setCryptoData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      
    <div className="flex justify-center items-center bg-slate-400">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cryptoData.length === 0 ? (
          <div>Loading....</div>
        ) : (
          cryptoData.map((crypto) => (
            <>

            <div>
            <h1>Crypto</h1>

            <Card key={crypto.id} crypto={crypto} />
            </div>
            </>
          ))
        )}
      </div>
    </div>
    </>
  );
}

export default App;
