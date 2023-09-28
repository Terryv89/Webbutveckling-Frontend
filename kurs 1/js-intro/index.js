console.log("hello world");

console.log(document);

document.querySelector("button");

document.querySelector("button").addEventListener("click", () => {
  console.log("du klickade");
  document.querySelector("h1").classList.toggle("blue");
});
