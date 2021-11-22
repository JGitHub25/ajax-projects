import { showLoader } from "./toggleLoading.js";

async function getCocktailsData(url) {
  showLoader();
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default getCocktailsData;
