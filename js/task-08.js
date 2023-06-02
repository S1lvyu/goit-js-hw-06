"use strict";
const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener("submit", handleSubmit);
function handleSubmit() {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Te rog, completeaza toate campurile!");
  }

  console.log(form.elements);
  console.log(form.elements.email.value);
  console.log(form.elements.password.value);
  event.currentTarget.reset();
}
// Gestionarea trimiterii formularului form.login-form trebuie să fie în cadrul evenimentului submit.
// La trimiterea formularului, pagina nu trebuie să se reîncarce.
// Dacă formularul are câmpuri goale, afișează un alert care avertizează că toate câmpurile trebuie completate.
// Dacă utilizatorul a completat toate câmpurile și a trimis formularul, colectează valorile câmpului într-un obiect în care numele câmpului va fi numele proprietății, iar valoarea câmpului va fi valoarea proprietății. Pentru a accesa elementele formularului, folosește proprietatea elements.
// Afișează obiectul cu datele introduse în consolă și șterge valorile câmpurilor din formular folosind metoda reset.
