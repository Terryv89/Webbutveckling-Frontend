/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')
 */
/**
 * 1. Slumpa ord som ska gissas på
 * 2. Lägg till en addeventlistener för keyup
 * 3. Jämför bokstaven som användaren klickade på med alla bokstäver i ordet
 *      1. Loopa igenom arrayen med alla bokstäver
 *      2. Om bokstaven som användaren gissade finns så visa var
 *      3. Annars addera en del till gubben
 */

const bodyElem = document.querySelector("body");
const showpress = document.querySelector("#showpress");
const wrongGuessesP = document.querySelector("#wrongs");
const randomWord = document.querySelector("#randomWord");
const gameOverElem = document.querySelector("#gameover");

let maxWrongs = 0;
let words = ["banan", "äppelpaj", "skruvmejsel", "potatismos", "korvkiosk"];
let showGuesses = [];

let randomPosition = Math.floor(Math.random() * words.length);
const selectedWord = words[randomPosition];
console.log(selectedWord + "this is selectedword");

const letters = selectedWord.split(""); // Splittar ordet till en array med bokstäver för att enklare kunna jämföra
console.log(letters + "this is letters");

function linesToLetters() {
  let displayedWord = "";
  for (let letter of selectedWord) {
    if (showGuesses.includes(letter)) {
      displayedWord += letter;
    } else {
      displayedWord += "_";
    }
    displayedWord += " ";
  }
  randomWord.innerHTML = displayedWord.trim();
}

linesToLetters();

function showSpoiler() {
  return (document.querySelector(
    "#rätt"
  ).innerHTML = `spoiler - ${selectedWord}`);
}

bodyElem.addEventListener("keyup", (event) => {
  showGuesses.push(event.key);
  showpress.innerHTML = `Dina gissningar  ${showGuesses.join(", ")}`;

  let correctGuess = false;
  let winWord = [];

  for (let i = 0; i < letters.length; i++) {
    if (event.key === letters[i]) {
      correctGuess = true;
      document.querySelector("#gissadeRätt").innerHTML = "du gissade rätt";
      linesToLetters();
      winWord.push(i);
    } else if (winWord.length === letters.length) {
      alert("you won!");
    }
  }

  if (!correctGuess) {
    maxWrongs++;
    wrongGuessesP.innerHTML = `Antal felgissningar: ${maxWrongs} Max är 5 !`;
    document.querySelector("#gissadeRätt").innerHTML = "du gissade fel";

    if (maxWrongs === 1) {
      document.querySelector("figure").classList.add("scaffold");
    } else if (maxWrongs === 2) {
      document.querySelector("figure").classList.add("head");
    } else if (maxWrongs === 3) {
      document.querySelector("figure").classList.add("body");
    } else if (maxWrongs === 4) {
      document.querySelector("figure").classList.add("arms");
    } else if (maxWrongs === 5) {
      gameOverElem.classList.add("show");

      document.querySelector("figure").classList.add("legs");
    }
  }
});
