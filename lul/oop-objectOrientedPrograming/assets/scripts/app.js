const productList = {
  products: [
    {
      title: "a pillow",
      imageUrl:
        "https://cdn.thewirecutter.com/wp-content/media/2023/01/bedpillows-2048px-0049-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024&dpr=2",
      price: 19.99,
      description: "soft pillow",
    },
    {
      title: "a carpet",
      imageUrl:
        "https://www.syfy.com/sites/syfy/files/2021/02/magic-carpet.jpg",
      price: 89.99,
      description: "a flying carpet",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `

      <div>
        <img src="${prod.imageUrl}" >
        <div class="product-item__content">
            <h2> ${prod.title}</h2>
            <h3> ¢${prod.price}</h3>
            <p> ${prod.description}</p>
            <button> Add To Cart </button>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
