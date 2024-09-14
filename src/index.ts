const btn = document.querySelector('#btn') as HTMLElement;
const inputElm = document.querySelector('#input') as HTMLInputElement;
const todoList = document.querySelector('#todoList') as HTMLElement;

function addTodoList(task: string){
    const newLi = document.createElement('li');
    newLi.textContent = task;
    todoList.appendChild(newLi);
}

btn.addEventListener('click', ()=> {
    const val = inputElm.value;
    addTodoList(val);
    inputElm.value = "";
});