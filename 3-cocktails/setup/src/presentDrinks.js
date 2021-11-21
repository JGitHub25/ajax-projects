import getCocktailsData from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";

async function showDrinks(url) {
  //get data.
  const data = await getCocktailsData(url);

  //display data.
  const sectionHTML = await displayDrinks(data);
  console.log(sectionHTML);
}

export default showDrinks;
