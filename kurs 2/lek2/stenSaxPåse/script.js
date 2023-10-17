const btnElemSten = document.querySelector("#btn-sten");
const btnElemSax = document.querySelector("#btn-sax");
const btnElemPåse = document.querySelector("#btn-påse");
const resultElem = document.querySelector("#dittVal");
const compChoiceElem = document.querySelector("#compVal");
const winElem = document.querySelector("#vinstP");
const loseElem = document.querySelector("#förlustP");
const tiesElem = document.querySelector("#ties");

let userGuess;
let wins = 0;
let loses = 0;
let ties = 0;

btnElemSten.addEventListener("click", () => {
  // Kunde lagt i en vanlig function
  userGuess = "sten"; // och kört onclick i knappen
  gameLogic(userGuess);
  winElem.textContent = "Wins : " + wins;
  loseElem.textContent = "Förluster : " + loses;
  tiesElem.textContent = "Lika : " + ties;
});

/*
function sax() {          om man vill köra onclick i html.en
  userGuess = "sax";
  gameLogic(userGuess);
  winElem.textContent = "Wins : " + wins;
  loseElem.textContent = "Förluster : " + loses;
  tiesElem.textContent = "Lika : " + ties;
}
*/

btnElemSax.addEventListener("click", () => {
  userGuess = "sax";
  gameLogic(userGuess);
  winElem.textContent = "Wins : " + wins;
  loseElem.textContent = "Förluster : " + loses;
  tiesElem.textContent = "Lika : " + ties;
});

btnElemPåse.addEventListener("click", () => {
  userGuess = "påse";
  gameLogic(userGuess);
  winElem.textContent = "Wins : " + wins;
  loseElem.textContent = "Förluster : " + loses;
  tiesElem.textContent = "Lika : " + ties;
});

function gameLogic() {
  const computerChoices = ["sten", "sax", "påse"];
  const computersGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  //resultElem.innerHTML = "Du valde " + userGuess;
  compChoiceElem.innerHTML = "Datorn valde " + computersGuess;

  if (userGuess === computersGuess) {
    resultElem.innerHTML = "Matchen blev oavgjord";
    ties++;
  } else if (
    (userGuess === "sten" && computersGuess === "påse") ||
    (userGuess === "påse" && computersGuess === "sax") ||
    (userGuess === "sax" && computersGuess === "sten")
  ) {
    resultElem.innerHTML = "Du förlorade";
    loses++;
  } else {
    resultElem.textContent = "Du vann";
    wins++;
    // wins += 2;
  }
}

function reset() {
  ties = 0;
  loses = 0;
  wins = 0;
  winElem.textContent = "Wins : " + wins;
  loseElem.textContent = "Förluster : " + loses;
  tiesElem.textContent = "Lika : " + ties;
}
