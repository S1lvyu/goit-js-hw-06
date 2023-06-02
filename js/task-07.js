"use strict";
const fontSizeControl = document.querySelector("#font-size-control");
const textToIncrease = document.querySelector("#text");
fontSizeControl.value = 16;
function scrollControl() {
  const fontSize = fontSizeControl.value + "px";
  textToIncrease.style.fontSize = fontSize;
}
fontSizeControl.addEventListener("input", scrollControl);
// Scrie un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și modifică stilurile inline al span#text prin actualizarea proprietății font-size. Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.
