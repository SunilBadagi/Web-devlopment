const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');


//event listner for add button
addTask.addEventListener('click', function () {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = inputTask.value;
    task.appendChild(li);

    let checkbutton = document.createElement("button");
    checkbutton.innerHTML = '<i class="fa-solid fa-check">add</i>';
    checkbutton.classList.add('checkTask');
    task.appendChild(checkbutton);

    let deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<i class="fa-solid fa-trash-can">remove</i>';
    deletebutton.classList.add('deleteTask');
    task.appendChild(deletebutton);

    if (inputTask.value === "") {
        alert('Please Enter a task');
    }else{
        taskContainer.appendChild(task)
    }

    inputTask.value="";

    checkbutton.addEventListener('click',function(){
        checkbutton.parentElement.style.textDecoration="line-through";
    });

    deletebutton.addEventListener('click',function(e){
       let target=e.target;
       target.parentElement.parentElement.remove();
    });
    
})