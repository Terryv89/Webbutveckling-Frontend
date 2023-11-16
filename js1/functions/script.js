function getYear() {
  const year = new Date().getFullYear();
  return year;
}

getYear();

function isFieldEmptey() {
  const field = document.querySelector("#info");
  if (field === " ") {
    return true;
  } else {
    return false;
  }
}

const fieldTest = isFieldEmptey();

if (fieldTest === true) {
  alert("provide stuff plix");
}
