import User, { printName as printUserName, printAge } from "./user.js";

const user = new User("bob", 11);
console.log(user);

printUserName(user);
