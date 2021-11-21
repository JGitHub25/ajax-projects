import presentDrinks from "./presentDrinks.js";
import get from "./getElement.js";

const form = get(".search-form");
const input = get(".search-form input");

//John lo hace con el evento 'keyup' en vez de 'input'.
form.addEventListener("input", (e) => {
  e.preventDefault();

  let params = input.value;
  if (!params) {
    //   Para que al borrar la búsqueda se muestren los cócteles defaault en vez
    //   de los de la última búsqueda. John no hace esto.
    params = "a";
  }

  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params}`;
  presentDrinks(URL);
});
