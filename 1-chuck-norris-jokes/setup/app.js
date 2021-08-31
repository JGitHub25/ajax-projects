const contentParag = document.querySelector(".content");
const img = document.querySelector("img");
const btn = document.querySelector(".btn");
btn.addEventListener("click", SgetData);

async function getData() {
  img.classList.add("shake-img");
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const response2 = response;
    console.log(response2);
    if (response.ok) {
      const jsonResp = await response.json();
      console.log(response);
      console.log(jsonResp);
      console.log(jsonResp.value);
      console.log(`Esta es fetch response ${response}`);
      console.table(jsonResp);
      contentParag.innerHTML = jsonResp.value;
      const promesa = await new Promise((resolve, reject) => {
        if (5 < 6) {
          resolve("Valor cumplido");
        } else {
          reject("Valor no cumplido");
        }
      });

      console.log(promesa);
      img.classList.remove("shake-img");
      return;
    }
    throw new Error("No hay chiste para ti, young man!");
  } catch (error) {
    console.log(error);
  }
}

function getData2() {
  const xhr = new XMLHttpRequest(); //Creates new object.
  const url = "https://api.chucknorris.io/jokes/random";

  //Handles response.
  xhr.responseType = "json";
  console.log(xhr);
  console.table(xhr);
  xhr.onreadystatechange = () => {
    console.log(xhr);
    console.log(xhr.readyState);
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr);
      console.log(xhr.response);
      console.log(xhr.response.value);
      //   console.log(`Esta es xhr response ${xhr.response}`);
      //   console.log(`Esta es xhr response value ${xhr.response.value}`);
      return xhr.response;
    }
  };

  xhr.open("GET", url); //Opens request.
  xhr.send(); //Sends object.
}

function SgetData() {
  getData();
  getData2();
}
