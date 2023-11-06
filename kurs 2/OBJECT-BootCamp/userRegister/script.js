// uppg 1

const countrySelect = document.querySelector("#cSelect");
const btn = document.querySelector("#countryBtn");

btn.addEventListener("click", () => {
  const selectedCountry = countrySelect.value;
  let sortedUsers = getOnlyFromCountryCode(selectedCountry);
  document.querySelector("main").innerHTML = JSON.stringify(sortedUsers);
});

let nationalite = countrySelect.value;

function getOnlyFromCountryCode(nationalite) {
  const sorter = users.filter((user) => user.nat === nationalite);
  document.querySelector("main").innerHTML = JSON.stringify(sorter);
  return sorter;
}

// uppg 2 -------------------------------------------------------------------------
// hämtar inte value ifrån radio knappar atm
const femaleBtn = document.querySelector("#femaleBtn");
const maleBtn = document.querySelector("#maleBtn");
const pElem = document.querySelector("#p1");

femaleBtn.addEventListener("click", () => {
  const femaleUsers = filterByGender(users, ["Ms", "Miss", "Mademoiselle"]);
  displayUsers(femaleUsers);
});

maleBtn.addEventListener("click", () => {
  const maleUsers = filterByGender(users, ["Mr", "Monsieur"]);
  displayUsers(maleUsers);
});

function filterByGender(users, genderTitles) {
  return users.filter((user) => genderTitles.includes(user.name.title));
}

function displayUsers(users) {
  pElem.innerHTML = JSON.stringify(users);
}

// uppg 3 ------------------------------------------------------------------

const starBtn = document.querySelector("#starBtn");
const pElem2 = document.querySelector("#p2");

starBtn.addEventListener("click", () => {
  const filteredEmails = getAllEmails(users);
  displayEmails(filteredEmails);
});

function getAllEmails(users) {
  return users.filter((user) => user.email).map((user) => user.email);
}

function displayEmails(emails) {
  const emailString = JSON.stringify(emails, null, 2);
  return (pElem2.innerHTML = emailString);
}

// uppg 4    UTMANING !

const evilCorpBtn = document.querySelector("#evilBtn");
const evilCorpP = document.querySelector("#updatedEmailsP");

const modifiedUsers = users.map((user) => {
  const { first, last } = user.name;
  const modifiedEmail = `${last}.${first}@evilCorp.domain`;
  return {
    ...user,
    email: modifiedEmail,
  };
});

evilCorpBtn.addEventListener("click", () => {
  const updatedEmails = modifiedUsers.map((user) => user.email).join(", ");
  evilCorpP.textContent = `Updated Emails: ${updatedEmails}`;
});

evilCorpBtn.addEventListener("click", () => {
  const updatedEmails = modifiedUsers.map((user) => user.email).join(", ");
  evilCorpP.textContent = `Updated Emails: ${updatedEmails}`;
});

///
