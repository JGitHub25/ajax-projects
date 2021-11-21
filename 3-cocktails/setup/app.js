import presentDrinks from "./src/presentDrinks.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

presentDrinks(URL);
// const getCocktailsData = async () => {
//   try {
//     const response = await fetch(URL);
//     const cocktailsData = await response.json();
//     console.log(cocktailsData);
//     return cocktailsData;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const filterCocktailsData = async () => {
//   const data = await getCocktailsData();
//   const filteredData = data.drinks.map((item) => {
//     const drink = {};
//     drink.id = item.idDrink;
//     drink.name = item.strDrink;
//     return drink;
//   });
//   console.log(filteredData);
// };

// filterCocktailsData();
