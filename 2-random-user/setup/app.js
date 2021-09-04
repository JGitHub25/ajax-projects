import { getUserData } from "./getData.js";

//ELEMENTOS DE LA PÁGINA
const descripcion = document.querySelector(".user-title");
const nombre = document.querySelector(".user-value");
const foto = document.querySelector(".user-img");
const btnRandom = document.querySelector(".btn");
const iconos = document.querySelectorAll(".icon");

//EVENT LISTENERS
btnRandom.addEventListener("click", () => {
  console.log("Funciono");
});

iconos.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("Funciono también");
  });
});

const user = await getUserData();
console.log(user);
