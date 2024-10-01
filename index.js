function addTask() {
    taskInput = document.querySelector("#task-input").value; // store the text of the task
    const identifier = "#" + taskInput.replaceAll(" ", ""); // create a string with no spaces to use as a unique identifier. spaces break the id

    const task = document.createElement("p") // create an element for the task text
    task.textContent = taskInput; // put the task text into that element
    task.id = taskInput.replaceAll(" ", "") + "txt"; // remove spaces from task text, add 'txt' and use it as the id
    task.onclick = () => editTask(task.id) // set the onclick event to call the editTask function

    const completeButton = document.createElement("BUTTON"); // create a button for deleting the task
    completeButton.type = "button"; // make it a generic button
    completeButton.innerText = "Mark completed"; // give the button a visible label
    completeButton.onclick = () => taskCompleted(identifier); // set the button's event listener to my deleteTask function
    completeButton.classList.add("comp-button") // add the button to the relevant css class

    const removeButton = document.createElement("BUTTON"); // create a button for deleting the task
    removeButton.type = "button"; // make it a generic button
    removeButton.innerText = "Remove task"; // give the button a visible label
    removeButton.onclick = () => deleteTask(identifier); // set the button's event listener to my deleteTask function
    removeButton.classList.add("rem-button") // add the button to the relevant css class

    const buttonContainer = document.createElement("DIV"); // make a div for the two buttons for layout purposes
    buttonContainer.classList.add("button-div") // add it to the relevant css class
    buttonContainer.appendChild(completeButton); // put the buttons inside
    buttonContainer.appendChild(removeButton); // put the buttons inside

    const li = document.createElement("LI"); // create a list item element
    li.classList.add("incomplete-task"); // apply the 'list-pair' css class
    li.appendChild(task); // put the task text inside
    li.appendChild(buttonContainer) // put the buttons container inside
    li.id = taskInput.replaceAll(" ", ""); // set the id so the delete button can delete it

    document.querySelector("ul").appendChild(li); // put the new list item in the task list

    document.querySelector("#task-input").value = ""; // clear the input field for the next task
}

function deleteTask(identifier) { // this function removes an item from the list
    document.querySelector(identifier).remove() // delete the associated list item
}

function taskCompleted(identifier) { // this function toggles the display of an item between two states
    const item = document.querySelector(identifier) // put the item in a variable
    item.classList.toggle("incomplete-task"); // toggle the two classes that handle the colour
    item.classList.toggle("complete-task");
    if (item.children[1].firstChild.innerText === "Mark completed") { // toggle the button's inner text between 'complete' and 'incomplete'
        item.children[1].firstChild.innerText = "Mark incomplete";
    } else {
        item.children[1].firstChild.innerText = "Mark completed";
    }
}

function editTask(identifier) { // this function changes the task text
    const oldText = document.querySelector("#" + identifier).innerText; // saves the original text in a variable
    const newText = window.prompt("Edit Task", oldText); // prompts the user for desired text, using original text as default
    document.querySelector("#" + identifier).innerText = newText; // replaces innerText value with new text
}