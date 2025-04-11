import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(search) {
    setSearch(search);
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList 
      items={items} 
      search={search}
      selectedCategory={selectedCategory}
      onCategoryChange={handleCategoryChange}
      onSearchChange={handleSearchChange}
      />
    </div>
  );
}

export default App;
