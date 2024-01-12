const pokemonInput = document.querySelector(".input");
const showInfo = document.querySelector(".output");
const showImg = document.querySelector(".pokemon-image");

pokemonInput.addEventListener("change", () => {
  const pokemonName = pokemonInput.value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      return response.json();
    })
    .then((data) => {
      showInfo.innerHTML = `Found Pokemon: ${data.name}`;
      showImg.src = data.sprites.front_default;
      showImg.alt = `${data.name} image`;
    })

    .catch((error) => {
      showInfo.innerHTML = `Error: ${error.message}`;
    });
});
