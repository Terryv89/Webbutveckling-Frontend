const btnElemSten = document.querySelector("#btn-sten");
const btnElemSax = document.querySelector("#btn-sax");
const btnElemPåse = document.querySelector("#btn-påse");
const resultElem = document.querySelector("#dittVal");
const compChoiceElem = document.querySelector("#compVal");
const winElem = document.querySelector("#vinstP");
const loseElem = document.querySelector("#förlustP");

let userGuess;

btnElemSten.addEventListener("click", () => {
  userGuess = "sten";
  gameLogic(userGuess);
});

btnElemSax.addEventListener("click", () => {
  userGuess = "sax";
  gameLogic(userGuess);
});

btnElemPåse.addEventListener("click", () => {
  userGuess = "påse";
  gameLogic(userGuess);
});

let wins;
let loses;

function gameLogic() {
  const computerChoices = ["sten", "sax", "påse"];
  const computersGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  resultElem.innerHTML = "Du valde " + userGuess;
  compChoiceElem.innerHTML = "Datorn valde " + computersGuess;
  winElem.innerHTML = "Wins = " + wins;

  if (userGuess === computersGuess) {
    resultElem.innerHTML = "Spelet är oavgjort";
  } else if (
    (userGuess === "sten" && computersGuess === "påse") ||
    (userGuess === "påse" && computersGuess === "sax") ||
    (userGuess === "sax" && computersGuess === "sten")
  ) {
    resultElem.innerHTML = "Du förlorade";
    loses++;
  } else {
    resultElem.innerHTML = "Du vann";
    wins++;
  }
}
