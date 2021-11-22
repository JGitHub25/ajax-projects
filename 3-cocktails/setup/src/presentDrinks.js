import getCocktailsData from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";

async function showDrinks(url) {
  //get data.
  const data = await getCocktailsData(url);

  //display data.
  const sectionHTML = await displayDrinks(data);
  if (sectionHTML) {
    setDrink(sectionHTML);
  }
}

export default showDrinks;
