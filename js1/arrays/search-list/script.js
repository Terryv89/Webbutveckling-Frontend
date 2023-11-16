const inStock = [
  "pizza",
  "cookies",
  "eggs",
  "apples",
  "milk",
  "cheese",
  "bread",
  "lettuce",
  "carrots",
  "broccoli",
  "potatoes",
  "crackers",
  "onions",
  "tofu",
  "limes",
  "cucumbers",
];
const search = prompt("Search for a product.");
let message;

// !search = kollar efter tom sträng eller null värde
if (!search) {
  message = `<strong>In stock :</strong> ${inStock.join(", ")}`;
} else if (inStock.includes(search.toLowerCase)) {
  // kollar om instock har search i sig
  message = `Yes, we have <strong>${search}</strong>. It´s #${
    inStock.indexOf(search.toLowerCase) + 1
  } on the list`;
} else {
  //   finns inte instock
  message = `Sorry we are out of ${search}`;
}

document.querySelector("main").innerHTML = `<p>${message}<p>`;
