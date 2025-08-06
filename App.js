// Get the root element
const root = document.getElementById('root');

// root css styles
root.style.display = 'flex';
root.style.fontFamily = 'Arial, sans-serif';
root.style.textAlign = 'center';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';
root.style.marginTop = '40px';
root.style.backgroundImage = 'linear-gradient(to right, #BD328E, #A360AF,#8064BA )';
root.style.border = "2px solid white";
root.style.padding = '20px';
root.style.display = 'flex';
root.style.flexDirection = 'column';
root.style.alignItems = 'center';
root.style.color = 'white';
root.style.borderRadius = '10px';
root.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
root.style.maxWidth = '600px';
root.style.margin = 'auto';


// heading for the task tracker
const heading = document.createElement('h2');
heading.textContent = 'Mini Task Tracker';
root.appendChild(heading);



// Input Field
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Add a new task...';
input.style.padding = '10px';
input.style.width = '60%';
input.style.borderRadius = '5px';
input.style.border = '1px solid #ccc';
root.appendChild(input);

// Add Button
const addButton = document.createElement('button');
addButton.textContent = 'Add ';
addButton.style.marginLeft = '10px';
addButton.style.padding = '10px 20px';
addButton.style.borderRadius = '5px';
addButton.style.backgroundColor = '#FB6D6D';
addButton.style.color = 'white';
addButton.style.border = 'none';
addButton.style.marginTop = '5px';

root.appendChild(addButton);

// Task List
const taskList = document.createElement('ul');
taskList.style.listStyle = 'none';
taskList.style.padding = '0';
taskList.style.marginTop = '20px';
taskList.style.textAlign = 'left';
taskList.style.maxWidth = '400px';
taskList.style.marginInline = 'auto';
root.appendChild(taskList);

// for the tasks to update the counter
function updateTaskCounter() {
  const totalTasks = taskList.querySelectorAll('li');
  const completedTasks = taskList.querySelectorAll('input[type="checkbox"]:checked');
  const remaining = totalTasks.length - completedTasks.length;
  counter.textContent = `Tasks Remaining: ${remaining}`;
  counter.style.color = remaining === 0 ? 'blue' : 'black';
}

// tasks function to add a task
// This function creates a new task item and adds it to the task list
function addTask() {
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create task item
  const li = document.createElement('li');
  li.style.display = 'flex';
  li.style.alignItems = 'center';
  li.style.justifyContent = 'space-between';
  li.style.marginBottom = '10px';
  li.style.backgroundColor = '#f4f4f4';
  li.style.padding = '10px';
  li.style.borderRadius = '5px';

  // Left side: checkbox + text
  const leftDiv = document.createElement('div');
  leftDiv.style.display = 'flex';
  leftDiv.style.alignItems = 'center';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.marginRight = '10px';

  const span = document.createElement('span');
  span.textContent = taskText;

  // Handle checkbox toggle
  checkbox.addEventListener('change', () => {
    span.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    updateTaskCounter();
  });

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.backgroundColor = '#dc3545';
  deleteBtn.style.color = 'white';
  deleteBtn.style.border = 'none';
  deleteBtn.style.borderRadius = '5px';
  deleteBtn.style.padding = '5px 10px';
  deleteBtn.style.cursor = 'pointer';

  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(li);
    updateTaskCounter();
  });

  // Assemble task item
  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input & update counter
  input.value = '';
  updateTaskCounter();
}

// the eventListener for the add button
addButton.addEventListener('click', addTask);

// Enable pressing "Enter" to add task
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Task Counter
const counter = document.createElement('p');
counter.textContent = 'Tasks Remaining: 0';
counter.style.fontWeight = 'bold';
root.appendChild(counter);
