const modal = document.querySelector("#modal");

// eventlisteners som öppnar popupen och ger dig info ifrån get data
jorden.addEventListener("click", () => {
  let jordenV = document.querySelector("#jorden").value;
  modal.showModal();
  getData(jordenV);
});

solen.addEventListener("click", () => {
  let solenV = document.querySelector("#solen").value;
  modal.showModal();
  getData(solenV);
});

merkurius.addEventListener("click", () => {
  let merkuriusV = document.querySelector("#merkurius").value;
  modal.showModal();
  getData(merkuriusV);
});

venus.addEventListener("click", () => {
  let venusV = document.querySelector("#venus").value;
  modal.showModal();
  getData(venusV);
});

mars.addEventListener("click", () => {
  let marsV = document.querySelector("#mars").value;
  modal.showModal();
  getData(marsV);
});

jupiter.addEventListener("click", () => {
  let jupiterV = document.querySelector("#jupiter").value;
  modal.showModal();
  getData(jupiterV);
});

saturnus.addEventListener("click", () => {
  let saturnusV = document.querySelector("#saturnus").value;
  modal.showModal();
  getData(saturnusV);
});

uranus.addEventListener("click", () => {
  let uranusV = document.querySelector("#uranus").value;
  modal.showModal();
  getData(uranusV);
});

neptunus.addEventListener("click", () => {
  let neptunusV = document.querySelector("#neptunus").value;
  modal.showModal();
  getData(neptunusV);
});
