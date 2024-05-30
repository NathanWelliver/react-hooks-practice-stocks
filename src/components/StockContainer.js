import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, setBoughtStocks}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock 
          key={stock.id}
          stock={stock}
          setBoughtStocks={setBoughtStocks}
          inPortfolio={false}
        />
      ))}
    </div>
  );
}

export default StockContainer;
