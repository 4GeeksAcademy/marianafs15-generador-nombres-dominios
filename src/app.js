/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  let pronoum = ["the", "our"];
  let adjetive = ["great", "big"];
  let name = ["jogger", "racoon"];
  let extension = [".com", ".net"];
  let myList = document.querySelector("#lista");
  let domainNameList = "";

  for (let i = 0; i < pronoum.length; i++) {
    for (const iterator of adjetive) {
      for (const iterator2 of name) {
        for (const iterator3 of extension) {
          let domain = pronoum[i] + iterator + iterator2 + iterator3;
          console.log(domain);
          domainNameList += `<li>${domain}</li>`;
        }
      }
    }
  }

  myList.innerHTML = domainNameList;
};

