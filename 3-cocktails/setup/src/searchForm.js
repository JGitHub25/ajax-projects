import presentDrinks from "./presentDrinks.js";
import get from "./getElement.js";

const form = get(".search-form");
const input = get(".search-form input");

//John lo hace con el evento 'keyup' en vez de 'input'.
form.addEventListener("input", (e) => {
  e.preventDefault();

  const params = input.value;
  if (!params) return;

  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params}`;
  presentDrinks(URL);
});
