import getCocktailsData from "./fetchDrinks.js";

async function showDrinks(url) {
  const data = await getCocktailsData(url);
  console.log(data);
}

export default showDrinks;
