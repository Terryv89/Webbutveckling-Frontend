const btnElem = document.querySelector("#btn");
const resultElem = document.querySelector("#dittVal");
const inputElem = document.querySelector("input");
const compChoiceElem = document.querySelector("#compVal");

const computerChoices = ["sten", "sax", "påse"];
const computersGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

btnElem.addEventListener("click", () => {
  const userGuess = inputElem.value;
  resultElem.innerHTML = "Du valde " + userGuess;
  compChoiceElem.innerHTML = "Datorn valde " + computersGuess;

  if (userGuess === computersGuess) {
    resultElem.innerHTML = "Spelet är oavgjort";
  } else if (
    (userGuess === "sten" && computersGuess === "påse") ||
    (userGuess === "påse" && computersGuess === "sax") ||
    (userGuess === "sax" && computersGuess === "sten")
  ) {
    resultElem.innerHTML = "Du förlorade";
  } else {
    resultElem.innerHTML = "Du vann";
  }
});
