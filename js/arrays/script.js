let myArray = ["red", "green"];
myArray[2] = "blue"; // lägger till till array
myArray[3] = 1; // lägger till till array
myArray.push("hej"); // lägger till till array

myArray.forEach(function (value, index) {
  alert("I have " + value + " in my bag");
});

let item = myArray[2];
console.log(item);

myArray[2] = null;

const pElem = document.getElementsByName("p");
const btnElem = document.querySelector("#btn");

btnElem.addEventListener("click", () => {
  console.log(myArray);
  for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
  }
  console.log(myArray[1]);
});

// loopar arrayen skriver ut hela arrayen + index 1

// 2d array
let myFoodArray = ["pizza", "hamburger", ["iceCream", "kladdkaka"]];

console.log(myFoodArray);
