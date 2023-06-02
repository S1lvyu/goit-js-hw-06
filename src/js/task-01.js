"use strict";

const categories = document.querySelector("#categories");
const categoriesItems = categories.children;
console.log(`Number of categories: ${categoriesItems.length}`);

for (let item of categoriesItems) {
  const title = item.firstElementChild;
  const itemElements = item.lastElementChild.children;
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${itemElements.length}`);
}

// Scrie un script care:

// Va număra și printa în consolă numărul total de categorii din ul#categories, adică elementele li.item.
// Pentru fiecare element li.item din lista ul#categories, va găsi și printa în consolă titlul elementului (tag-ul <h2>) și numărul de elemente din acea categorie (toate elementele <li>).
// Ca rezultat, în consolă vor fi afișate astfel de mesaje:

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
