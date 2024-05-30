import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const API = "http://localhost:3001/stocks"

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [boughtStocks, setBoughtStocks] = useState([])
  const [sortCriteria, setSortCriteria] = useState("")
  const [filterCriteria, setFilterCriteria] = useState("")

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((stockList) => {
      setStocks(stockList)
    })
  }, [])

  const sortedFilteredStocks = stocks
    .filter((stock) => filterCriteria ? stock.type === filterCriteria : true)
    .sort((a, b) => {
      if(sortCriteria === "Alphabetically"){
        return a.name.localeCompare(b.name)
      } else if (sortCriteria === "Price"){
        return a.price - b.price;
      } else {
        return 0;
      }
    })

  return (
    <div>
      <SearchBar 
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
        filterCriteria={filterCriteria}
        setFilterCriteria={setFilterCriteria}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={sortedFilteredStocks}
            setBoughtStocks={setBoughtStocks}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            boughtStocks={boughtStocks}
            setBoughtStocks={setBoughtStocks}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
