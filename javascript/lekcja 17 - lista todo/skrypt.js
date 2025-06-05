const text = document.querySelector("#tekst");
const dodaj = document.querySelector("#dodaj");
const tasks = document.querySelector("#tasks");

dodaj.addEventListener("click", add_new_task);
function add_new_task(e){
    e.preventDefault()
    let task_name = text.value
    if(task_name === '') return;
    const task = createTask(task_name);
    tasks.appendChild(task);
    text.value = '';
}

function createTask(task_name){
    const task = document.createElement('p');
    task.innerHTML = `${task_name} <button>X</button>`;
    const delete_butt = task.querySelector("button");
    delete_butt.addEventListener("click", delete_task);
    return task;
}

function delete_task(e){
    e.target.parentElement.remove();
}