const middle = ["lettuce", "cheese", "patty"];
//const burger = ["top bun", middle, "bottom bun"]; // 2d array
const burger = ["top bun", ...middle, "bottom bun"];
// 3 punkter lägger in värdet ifrån middle som strings istället för array

console.log(burger);

const brass = ["trumpet", "trombone", "french horn", "baritone", "tuba"];
const woodwind = ["flute", " oboe", "klarinet", "saxophone", "bassoon"];

const instruments = [...brass, ...woodwind];
// slår ihop 2 arrays i 1.
// ändras arrayen med .tex push så kommer inte ändringen in
