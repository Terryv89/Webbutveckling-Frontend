const showSumElem = document.querySelector("#showSum");
const inputFormElem = document.querySelector("#inputForm");
const friendSumElem = document.querySelector("#friendSum");
const calculateButton = document.querySelector("#calculateButton");

calculateButton.addEventListener("click", () => {
  const numberOfFriends = document.querySelector("#numberOfFriends").value;
  const tip = document.querySelector("#tip").value;
  const sum = document.querySelector("#sum").value;
  const calculatedTip = calculateTip(sum, tip);
  const total = parseInt(sum) + calculatedTip;
  const dividedSum = showDividedSum(total, numberOfFriends);
  const sumDivided = divideTotal(total, calculatedTip, numberOfFriends);

  showDividedSum(dividedSum);
  calculateTip(sum, tip);
  divideTotal(sumDivided, numberOfFriends);

  showSumElem.classList.toggle("hide");
  inputFormElem.classList.toggle("hide");
});

function calculateTip(sum, tip) {
  const calculatedTip = parseInt(sum) * parseFloat(tip);
  return calculatedTip;
}

function showDividedSum(sum, numberOfFriends) {
  const total = sum / parseInt(numberOfFriends);
  console.log("Divided Sum: " + total);
  return total;
}

function divideTotal(sum, calculatedTip, numberOfFriends) {
  const sumDivided = (sum + calculatedTip) / parseInt(numberOfFriends);
  console.log("Sum Divided: " + sumDivided);
  return sumDivided;
}
