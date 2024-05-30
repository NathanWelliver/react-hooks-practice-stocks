import React from "react";

function SearchBar({ sortCriteria, setSortCriteria, filterCriteria, setFilterCriteria }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortCriteria === "Alphabetically"}
          onChange={(e) => setSortCriteria(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortCriteria === "Price"}
          onChange={(e) => setSortCriteria(e.target.value)}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={filterCriteria} onChange={(e) => setFilterCriteria(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
