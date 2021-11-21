import get from "./getElement.js";

const displayDrinks = async ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");

  if (!drinks) {
    title.textContent = "we don't have a cocktail with that name yet ;)!";
    section.innerHTML = null;
    return;
  }

  const drinksHTML = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="drink.html" target="_blank">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="Cocktail ${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  title.textContent = "";
  section.innerHTML = drinksHTML;
  return section;
};

export default displayDrinks;
