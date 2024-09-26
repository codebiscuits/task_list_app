function addTask() {
    taskInput = document.querySelector("#task-input").value; // store the text of the task

    const task = document.createElement("p") // create an element for the task text
    task.textContent = taskInput; // put the task text into that element

    const button = document.createElement("BUTTON"); // create a button for deleting the task
    button.type = "button"; // make it a generic button
    button.innerText = "Remove task"; // give the button a visible label
    const identifier = "#" + taskInput; // create a string to use as a unique identifier
    button.onclick = () => deleteTask(identifier); // set the button's event listener to my deleteTask function

    const li = document.createElement("LI"); // create a list item element
    li.classList.add("list-pair"); // apply the 'list-pair' css class
    li.appendChild(task); // put the task text inside
    li.appendChild(button); // put the button inside
    li.id = taskInput; // set the id so the button can delete it

    document.querySelector("ul").appendChild(li); // put the new list item in the task list

    document.querySelector("#task-input").value = ""; // clear the input field for the next task
}

function deleteTask(identifier) {
    document.querySelector(identifier).remove() // delete the associated list item
}