const printElement = document.querySelector("#wordPrintBtn");
const pFromBtn = document.querySelector("#textFromButton");
const counterBtn = document.querySelector("#counterBtn");
const incrementP = document.querySelector("#nrIncrement");
const decrementBtn = document.querySelector("#decrementBtn");
const resetBtn = document.querySelector("#resetBtn");
const inputP = document.querySelector("#inputP");
const msgBtn = document.querySelector("#msgBtn");

let increment = 0;

printElement.addEventListener("click", () => {
  pFromBtn.textContent = "Hej";
});

counterBtn.addEventListener("click", () => {
  increment++;

  incrementP.textContent = increment;
});

decrementBtn.addEventListener("click", () => {
  increment--;
  incrementP.textContent = increment;
});

resetBtn.addEventListener("click", () => {
  incrementP.textContent = increment = 0 + " ";
});

msgBtn.addEventListener("click", () => {
  const inputField = document.querySelector("#inputField").value;

  inputP.textContent = inputField;
});
