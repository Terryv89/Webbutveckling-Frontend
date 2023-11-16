const showSumElem = document.querySelector("#showSum");
const inputFormElem = document.querySelector("#inputForm");
const friendSumElem = document.querySelector("#friendSum");
const calculateButton = document.querySelector("#calculateButton");

calculateButton.addEventListener("click", () => {
  const tip = document.querySelector("#tip").value;
  const sum = document.querySelector("#sum").value;
  const numberOfFriends = document.querySelector("#numberOfFriends").value;

  const total = calculateTip(sum, tip);
  const friendSum = divideTotal(total, numberOfFriends);

  showDividedSum(friendSum);
});

function calculateTip(sum, tip) {
  const calculatedTip = parseInt(sum) * parseFloat(tip);
  const total = parseInt(sum) + calculatedTip;

  return total;
}

function divideTotal(total, numberOfFriends) {
  const sumDivided = total / parseInt(numberOfFriends);
  return sumDivided;
}

function showDividedSum(sum) {
  showSumElem.classList.toggle("hide");
  inputFormElem.classList.toggle("hide");
  friendSumElem.innerHTML = sum + " kr";
}
