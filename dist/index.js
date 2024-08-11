"use strict";
const btn = document.querySelector('#btn');
const inputElm = document.querySelector('#input');
const todoList = document.querySelector('#todoList');
function addTodoList(task) {
    const newLi = document.createElement('li');
    newLi.textContent = task;
    todoList.appendChild(newLi);
}
btn.addEventListener('click', () => {
    const val = inputElm.value;
    addTodoList(val);
    inputElm.value = "";
});
