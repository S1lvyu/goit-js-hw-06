"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

for (let ingredient of ingredients) {
  const element = document.createElement("li");
  element.className = "item";
  element.textContent = ingredient;

  ingredientsList.append(element);
}

// Scrie un script care pentru fiecare element al matricei ingredients:

// Va crea un element <li> separat. Asigură-te că folosești metoda document.createElement().
// Adaugă numele ingredientului ca conținut text.
// Adaugă clasa item la element.
// Apoi va insera toate elementele <li> dintr-o singură operație în lista ul#ingredients.
