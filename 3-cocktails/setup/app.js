import presentDrinks from "./src/presentDrinks.js";
import get from "./src/getElement.js";
// import searchCocktails from "./src/searchForm.js";
import "./src/searchForm.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL);
});
