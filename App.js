// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.

let root = document.getElementById("root");
document.body.appendChild(root);

// add text input to innerHTML
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Add a new task...";
root.appendChild(input);



// add the "Add" button
let button = document.createElement("button");
button.textContent = "Add Task";
root.appendChild(button);

//making my tasks to appear in an unordered list
let taskLists = document.createElement("ul.list").addClass("task-list");
taskLists.textContent = "Tasks:";
root.appendTo("ul.task-list");


