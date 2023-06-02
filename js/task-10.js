"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");
let amount;
let divBoxes = [];
let width = 20;

//get input value

input.addEventListener("input", (event) => {
  const value = event.currentTarget.value;
  amount = Number(value);
});

//create Boxes function declaration
function createBoxes() {
  for (let i = 0; i < amount; i++) {
    width += 10;
    divBoxes.push(`<div style='height:${width}px; width:${width}px;'></div>`);
  }
  boxes.innerHTML = divBoxes.join("");
  const items = boxes.children;

  for (let item of items) {
    item.style.backgroundColor = getRandomHexColor();
  }
  input.value = "";
}

//destroy function declaration
function destroyBoxes() {
  boxes.innerHTML = "";
  divBoxes = [];
  width = 20;
}
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
