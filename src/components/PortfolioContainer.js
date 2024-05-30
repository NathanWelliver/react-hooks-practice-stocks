import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ boughtStocks, setBoughtStocks }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {boughtStocks.map((stock) => (
        <Stock 
          key={stock.id}
          stock={stock}
          setBoughtStocks={setBoughtStocks}
          inPortfolio={true}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
