"use strict";
const incrementButton = document.querySelector(
  "button[data-action='increment']"
);
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);
const increment = () => (value.textContent = Number(value.textContent) + 1);
const decrement = () => (value.textContent = Number(value.textContent) - 1);
const value = document.querySelector("#value");
incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);

// Declară o variabilă counterValue ce va stoca valoarea curentă a contorului și asignează-i valoarea 0 pentru început.
// Adaugă click handler pe butoane, în interiorul cărora vei mări sau micșora valoarea contorului.
// Actualizează interfața cu noua valoare a variabilei counterValue.
