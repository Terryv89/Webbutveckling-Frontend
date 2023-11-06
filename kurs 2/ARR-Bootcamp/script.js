// 1
let arr = ["äpple", "päron", "banan", "apelsin", "ananas"];
// 2
let arr2 = ["hund", 12, true];
// 3
console.log(arr2.length);
// 4
let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
console.log(animals[0]);
// 5
console.log(animals[3]);
// 6
animals[1] = "tiger";
// 7
let a = [1, 2, 3];
let b = [4, 5, 6];

let aBArr = [...a, ...b];

console.log(aBArr);
// 8
let arri = ["a", "b", "c"];

let arri2 = [...arri];

// 9 lägg till i slutet
let fruits = ["kiwi", "apple", "pear"];
fruits.push("apple");
console.log(fruits);

//10 lägg till i början
let fruits2 = ["kiwi", "apple", "pear"];
fruits2.unshift("bapple");
console.log(fruits2);

//11 ta bort sista
let fruits3 = ["kiwi", "apple", "pear"];
fruits3.pop();
console.log(fruits3);

// 12 ta bort första
let fruits4 = ["kiwi", "apple", "pear"];
fruits4.shift();
console.log(fruits4);

// 13
let fruits5 = ["kiwi", "apple", "pear"];
fruits5.splice(1, 0, "bapple");
console.log(fruits5);

//14 Eller array i array? eller komma separerat?
let fruits6 = ["kiwi", "apple", "pear"];
fruits6.splice(2, 0, "banan sanan panan");
console.log(fruits6);

// 15 I arrayen  ta bort Christoffer och Johan.
// börja på index 1 ta bort 2
let names = ["David", "Christoffer", "Johan", "Maja"];
names.splice(1, 2);
console.log(names);

// 16 Spegelvänd arrayen .
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = nums.length - 1; i >= 0; i--) {
  let numInReverse = nums[i];
  console.log(numInReverse);
}

console.log(nums.reverse());

// 17 Kika om strängen ovan innehåller bokstaven n. // 33
let str = "Supercalifragilisticexpialidocious";
console.log(str.includes("n"));
// 18
console.log(str.includes("x"));
//19
console.log(str.indexOf("p"));
// 20
console.log(str.substring(0, 5));
//21
console.log(str.substring(27, 34));
