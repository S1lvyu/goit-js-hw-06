"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");
const elementsToInsert = [];
for (let image of images) {
  let element = `<li><img src="${image.url}" alt="${image.alt}"/></li>`;

  elementsToInsert.push(element);
}
gallery.insertAdjacentHTML("afterbegin", elementsToInsert.join(""));
gallery.style.display = "flex";
gallery.style.flexDirection = "column";
gallery.style.gap = "50px";
// Folosește matricea de obiecte images pentru a crea elementele <img> imbricate în <li>. Pentru a crea markup-ul, vor fi de mare ajutor template strings și metoda insertAdjacentHTML().

// Toate elementele galeriei trebuie adăugate la DOM dintr-o singură operație.
// Adaugă un stil minim de poziționare a galeriei (flexbox sau grid) prin intermediul claselor CSS.
