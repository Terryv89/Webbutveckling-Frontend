const btnElem = document.querySelector(".btn");
const inputElem = document.querySelector(".input");
const randomNumber = Math.ceil(Math.random() * 10);
const resultElem = document.querySelector("p");

btnElem.addEventListener("click", () => {
  const userGuess = inputElem.value;
  console.log("du gissade " + userGuess);
  console.log("de slumpade talet " + randomNumber);
  let count = 0;

  if (parseInt(userGuess) === randomNumber) {
    // kan även använda number
    count++;
    console.log("");
    resultElem.innerHTML = "rätt, antal gissningar" + count;
  } else if (parseInt(userGuess) > randomNumber) {
    count++;
    console.log("din gissning är för hög");
    resultElem.innerHTML = "du gissade för högt, antal gissningar" + count;
  } else {
    console.log("din gissning är för låg");
    console.log("de tog dig " + count + "gissningar");
    resultElem.innerHTML = "du gissade för lågt, antal gissningar" + count;
  }
});
