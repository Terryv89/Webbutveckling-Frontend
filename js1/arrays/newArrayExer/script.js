const shoppingList = ["bread", "milk", "eggs"];
shoppingList.push("flour", "coke"); // adding to end of array
// kan lägga till 1 eller flera med push
shoppingList.unshift("kaffe"); // addar i början index 0

//     shoppingList.pop(); // tar bort sista elementet och returnar de
let lastItem = shoppingList.pop(); // lastitem blir sista elementet
//                                    från listan och tar bort det
let firstItem = shoppingList.shift();
//       shoppingList.shift(); // tar bort första elementet

const planets = ["Mercury", "Venus", "Earth", "Mars"];

// console.log(planets[1]);

console.log(`i have ${shoppingList.length} items in my shoppingbag`);

const numbersArr = [100, 200, 300, 400, 500];

/*
.unshift lägger till första elem
.push lägger till i slutet 
.pop tar bort sisda elementet
.shift tar bort första elementet
...array namn in i arrayen. lägger till strings INTE 2d array
arrnamn.join(", ") skriver ut array med vald avskiljare
arrnamn.includes("t.ex apple") returnar boolean
arrnamn.indexOf("") visar index.et -1 om de inte finns
*/
