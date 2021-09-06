import { getUserData } from "./getData.js";

//ELEMENTOS DE LA PÁGINA
const descripcion = document.querySelector(".user-title");
const infoValue = document.querySelector(".user-value");
const foto = document.querySelector(".user-img");
const btnRandom = document.querySelector(".btn");
const iconos = document.querySelectorAll(".icon");

//FUNCIONES
function setDataVisually(userData) {
  foto.src = userData.image;
  descripcion.innerHTML = `My name is:`;
  infoValue.innerHTML = userData.name;
  iconos.forEach((icon) => icon.classList.remove("active"));
  document.querySelector("[data-label=name]").classList.add("active");

  iconos.forEach((element) => {
    element.addEventListener("click", (e) => {
      descripcion.innerHTML = `My ${element.dataset.label} is:`;
      infoValue.innerHTML = userData[`${element.dataset.label}`];
      iconos.forEach((icon) => icon.classList.remove("active"));
      e.currentTarget.classList.add("active");
    });
  });
}

async function getNset() {
  const user = await getUserData();
  setDataVisually(user);
}

//EVENT LISTENERS
btnRandom.addEventListener("click", getNset);

document.addEventListener("DOMContentLoaded", getNset);
