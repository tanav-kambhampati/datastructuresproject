const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// performs function when the "Add Task" button is clicked
addTaskButton.addEventListener("click", () => {
	const task = taskInput.value;
	const priority = priorityInput.value;
	const deadline = deadlineInput.value;
	// if user has not typed anything or has not inputted a deadline for their homework, alter them to do so
	if (task.trim() === "" || deadline === "") {
		alert("Please select an upcoming date for the deadline.")
		return; 
	}

	// variables to check date of dealine
	const selectedDate = new Date(deadline);
	const currentDate = new Date();
	// if the deadline is less than the current data, alert them to set homework in the future
	if (selectedDate <= currentDate) {
		alert("Please select an upcoming date for the deadline.");
		return;
	}

	// this block of code adds a div and adds the task with the name, priority, date, and the mark done button
	const taskItem = document.createElement("div");
	taskItem.classList.add("task");
	taskItem.innerHTML = `
	<p>${task}</p>
	<p>Priority: ${priority}</p>
	<p>Deadline: ${deadline}</p>
	<button class="mark-done">Mark Done</button>
`;

// adds whatever the user inputted to the div
	taskList.appendChild(taskItem);
// resets the input values to normal so the user can add more tasks
	taskInput.value = "";
	priorityInput.value = "top";
	deadlineInput.value = "";
});

// function that performs when an element in the dynamically added task list is clicked
taskList.addEventListener("click", (event) => {
	// if the task list div with the "Mark Done" button contains whateer the user inputted, highlight the background a darker background for visual
	if (event.target.classList.contains("mark-done")) {
		const taskItem = event.target.parentElement;
		taskItem.style.backgroundColor = "#666666";
		event.target.disabled = true;
	} //else {
		//taskitem.style.backgroundColor = "#000000";
	//}
});


