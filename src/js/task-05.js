"use strict";
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const initialValue = nameOutput.textContent;

nameInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;
});

nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    nameOutput.textContent = initialValue;
  }
});
// Scrie un script care, atunci când se introduce un text în input#name-input (evenimentul input), înlocuiește valoarea lui span#name-output cu valoarea curentă din input#name-input. Dacă input-ul este gol, în acel span se va afișa "Anonymous".
