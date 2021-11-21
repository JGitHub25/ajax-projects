import get from "./getElement.js";

const loader = get(".loading");

export const showLoader = () => {
  loader.classList.remove("hide-loading");
};

export const hideLoader = () => {
  loader.classList.add("hide-loading");
};
