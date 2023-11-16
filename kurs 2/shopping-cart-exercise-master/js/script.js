let products = document.getElementsByTagName("button");
let shoppingCart = [];

function listProductsInCart() {
  let cartProducts = "";
  for (let i = 0; i < shoppingCart.length; i++) {
    cartProducts =
      cartProducts +
      '<li><span class="product-title">Titel: </span> ' +
      shoppingCart[i] +
      `  <button onclick="deleteCartItem(${i})" class = "removeBtn">Remove product</button>` +
      "</li>";
  }
  document.querySelector("#products").innerHTML = cartProducts;
}

function deleteCartItem(index) {
  const itemToBeRemoved = shoppingCart[index];
  shoppingCart.splice(index, 1);
  document.querySelector("#productsInCart").innerHTML = shoppingCart.length;
  alert(`${itemToBeRemoved} is removed`);
  document.querySelector("#cart").classList.toggle("hide");
  listProductsInCart();
}

function updateCart() {
  let product = event.target.parentNode.getAttribute("data-product");
  let productExists = false;

  for (let i = 0; i < shoppingCart.length; i++) {
    if (product === shoppingCart[i]) {
      productExists = true;
      break;
    }
  }
  if (productExists) {
    alert(`${product} allready exists in your cart`);
  } else {
    shoppingCart.push(product);
    document.querySelector("#productsInCart").innerHTML = shoppingCart.length;
    listProductsInCart();
  }
}

for (let i = 0; i < products.length; i++) {
  products[i].addEventListener("click", (event) => {
    console.log(event.target);
    updateCart();
  });
}

document.querySelector("#open-cart").addEventListener("click", () => {
  document.querySelector("#cart").classList.toggle("hide");
});

listProductsInCart();
