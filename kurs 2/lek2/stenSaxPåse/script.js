const btnElemSten = document.querySelector("#btn-sten");
const btnElemSax = document.querySelector("#btn-sax");
const btnElemPåse = document.querySelector("#btn-påse");
const resultElem = document.querySelector("#dittVal");
const compChoiceElem = document.querySelector("#compVal");

/*    listener för bildknapp
const btnImgSten = document.querySelector("#imageButton");
btnImgSten.addEventListener("click", () => {
  userGuess = "sten";
  gameLogic(userGuess);
});  */

//const inputElem = document.querySelector("input");

//const userGuess = inputElem.value;

const computerChoices = ["sten", "sax", "påse"];
const computersGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];
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

function gameLogic() {
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
}
