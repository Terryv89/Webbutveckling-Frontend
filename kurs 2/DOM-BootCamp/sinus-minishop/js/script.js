// 1
const AshHoodieElem = document.querySelector("#ashHoodie");
AshHoodieElem.innerHTML = "Potato";
//2
const homeNavElem = document.querySelector("#home");
homeNavElem.textContent = "Start";
//3
const mailUsElem = document.querySelector("#mailUs");
mailUsElem.textContent = "Mail Us";
//4
const fireInfoElem = document.querySelector("#fireInfo");
fireInfoElem.textContent = "Snyggaste röda tröjan istan! köp!";
//5
const potButtonElem = document.querySelector("#potatoButton");
potButtonElem.style.backgroundColor = "red";
potButtonElem.textContent = "köp";
//6
const potatoBackgroundElem = document.querySelector("#potatoBackground");
potatoBackgroundElem.style.backgroundColor = "pink";
// 7
const adressElem = document.querySelector("#adress");
adressElem.innerHTML =
  "Sinus skateboards <br> CoolStreet 13 133 37,<br> Rampnäs";
// 8
const pColorCollectionElem = document.querySelectorAll("p");
for (let i = 0; i < pColorCollectionElem.length; i++) {
  pColorCollectionElem[i].style.color = "purple";
}
//9
const allButtons = document.getElementsByTagName("button");
for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].innerHTML = "add to cart";
}
//10
const homeFElem = document.querySelector("homeFooter");
homeFElem.classList.add("active");

//homeNavElem.classList.add("active");
//11
const logoRemoveElem = document.querySelector(".logo2");
logoRemoveElem.classList.remove("logo");
//14
logoRemoveElem.addEventListener("click", () => {
  console.log("found you !");
});
