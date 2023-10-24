const text = document.querySelector("#text");
const felsökning = document.querySelector("#felsökning");
const btn = document.querySelector("#btn");
const playAgainBtn = document.querySelector("#playAgainBtn");
const guessesTxt = document.querySelector("#guessesTxt");
const gameOver = document.querySelector("#gameOver");
const spoilerBtn = document.querySelector("#spoiler");
const showSpoiler = document.querySelector("#showSpoiler");

const randomNr = Math.ceil(Math.random() * 100) + 1;
playAgainBtn.style.display = "none";
gameOver.style.display = "none";

let guesses = 0;

text.textContent = "du gissade : ";

let isSpoilerVisible = false;

spoilerBtn.addEventListener("click", () => {
  if (!isSpoilerVisible) {
    showSpoiler.textContent = `Random gissningen är ${randomNr}`;
    isSpoilerVisible = true;
    showSpoiler.style.display = "block";
  } else {
    showSpoiler.style.display = "none";
    isSpoilerVisible = false;
  }
});

btn.addEventListener("click", () => {
  guesses++;

  const guessInput = parseInt(document.querySelector("#guessInput").value);
  guessesTxt.textContent = `du har gissat ${guesses} ggr`;

  if (isNaN(guessInput)) {
    gameOver.textContent = "Not a number";
    gameOver.style.display = "block";
  } else if (guessInput === randomNr) {
    playAgainBtn.style.display = "block";
    gameOver.textContent = "You Win!";
    gameOver.style.display = "block";

    text.textContent = "Rätt!";
  } else if (guesses > 9) {
    text.textContent = "GAME OVER";
    gameOver.style.display = "block";

    playAgainBtn.style.display = "block";
  } else if (guessInput > randomNr) {
    text.textContent = "du gissade : för högt";
  } else {
    text.textContent = "du gissade : för lågt";
  }
});

playAgainBtn.addEventListener("click", () => {
  location.reload();
  felsökning.innerHTML = `randomnr = ${randomNr}`;
});
