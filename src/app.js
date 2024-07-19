/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronombre = ["the", "our"];
  let adj = ["great", "big"];
  let nombre = ["jogger", "racoon"];
  let extensiones = [".com", ".net"];
  let myList = document.querySelector("#lista");
  let listaNombresDominios = "";

  for (let i = 0; i < pronombre.length; i++) {
    for (const iterator of adj) {
      for (const iterator2 of nombre) {
        for (const iterator3 of extensiones) {
          let dominio = pronombre[i] + iterator + iterator2 + iterator3;
          console.log(dominio);
          listaNombresDominios += `<li>${dominio}</li>`;
        }
      }
    }
  }

  myList.innerHTML = listaNombresDominios;
};

