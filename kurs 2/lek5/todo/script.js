const addBtn = document.querySelector("#addBtn");
const inputValue = document.querySelector("#inputValue");
const showBtn = document.querySelector("#showBtn");
const delBtn = document.querySelector("#delBtn");
const inputValueDel = document.querySelector("#inputValueDel");

let todos = [];

addBtn.addEventListener("click", () => {
  const todo = inputValue.value;
  todos.push(todo);

  const lastItem = todos[todos.length - 1];

  document.querySelector("main").innerHTML = "du la till : " + lastItem;
});

let todoitems = [];

showBtn.addEventListener("click", () => {
  for (let i = 0; i < todos.length; i++) {
    todoitems.push(todos[i]);
    document.querySelector("section").innerHTML = todoitems.join(", ");
  }
});

delBtn.addEventListener("click", () => {
  itemToDel = inputValue.value;
  for (let i = 0; i < todos.length; i++) {
    const currentItem = todos[i];
    if (currentItem === itemToDel) {
      todos.splice(i, 1);
      document.querySelector("aside").innerHTML = `item deleted`;
    }
  }
});
