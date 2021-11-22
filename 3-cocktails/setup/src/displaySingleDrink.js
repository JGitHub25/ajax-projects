import { hideLoader } from "./toggleLoading.js";
import get from "./getElement.js";

const displaySingleDrink = (data) => {
  hideLoader();
  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];

  const img = get(".drink-img");
  const drinkName = get(".drink-name");
  const description = get(".drink-description");
  const ingredients = get(".drink-ingredients");

  document.title = name;
  img.src = image;
  drinkName.textContent = name;
  description.textContent = desc;

  ingredients.innerHTML = list
    .map((ingredient) => {
      if (!ingredient) return;
      return `<li><i class="far fa-check-square"></i>${ingredient}</li>`;
    })
    .join("");

  const button = get(".btn");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    window.close();
  });
};

export default displaySingleDrink;
