let score = 20;
let randomNumber = generateRandomNumber();
const resetBtn = document.querySelector(".again");
let highscore = 0;

const messageElement = document.querySelector(".message");
const numberElement = document.querySelector(".number");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");
const guessInput = document.querySelector(".guess");
const bodyElement = document.querySelector("body");

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage("Enter a number⁉️");
  } else if (guess === randomNumber) {
    displayMessage("🌮  You Won");
    numberElement.textContent = randomNumber;
    scoreElement.textContent = score;
    highscoreElement.textContent = score;

    bodyElement.style.backgroundColor = "#60b347";
    numberElement.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else {
    handleWrongGuess(guess);
  }
});

resetBtn.addEventListener("click", () => {
  resetGame();
});

function generateRandomNumber() {
  return Math.floor(Math.random() * 21) + 1;
}

function displayMessage(message) {
  messageElement.textContent = message;
}

function handleWrongGuess(guess) {
  if (score > 1) {
    displayMessage(guess > randomNumber ? "🔼 too high" : "🔽 too low");
    score -= 1;
    scoreElement.textContent = score;
  } else {
    displayMessage("you lost the game :c");
    scoreElement.textContent = 0;
  }
}

function resetGame() {
  score = 20;
  randomNumber = generateRandomNumber();
  displayMessage("Start Guessing");
  scoreElement.textContent = score;
  numberElement.textContent = "?";
  guessInput.value = "";

  numberElement.style.width = "15rem";
  bodyElement.style.backgroundColor = "#222";
}
