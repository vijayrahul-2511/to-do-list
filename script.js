function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");

    // Create a new list item
    const newTask = document.createElement("li");

    // Add task text
    const taskTextNode = document.createTextNode(taskText);
    newTask.appendChild(taskTextNode);

    // Add complete button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function () {
        newTask.classList.toggle("completed");
    };
    newTask.appendChild(completeButton);

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(newTask);
    };
    newTask.appendChild(deleteButton);

    // Add the new task to the list
    taskList.appendChild(newTask);

    // Clear the input field
    input.value = "";
}
