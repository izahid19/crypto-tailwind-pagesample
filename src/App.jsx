import React, { useState, useEffect } from "react";

function App() {
  const [cryptoData, setCryptoData] = useState([]); // Initialize with an empty array
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    fetchData(API);
  }, []);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCryptoData(data); // Store the fetched data in state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="justify-center items-center">
      <h1 className="text-center text-3xl">Crypto Dashboard</h1>
      <div>
        {cryptoData.map((crypto) => (
          <div key={crypto.id}>
            <img src={crypto.image} alt={`${crypto.name} logo`} />
            <div>
              <div>
                <span>{crypto.name}</span>
                <span>{crypto.current_price}</span>
              </div>
              <div>
                <span>{crypto.symbol}</span>
                <span>{crypto.price_change_percentage_24h}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
