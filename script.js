document.getElementById("add-task").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText} <button onclick="removeTask(this)">Excluir</button>
    `;

    document.getElementById("task-list").appendChild(li);

    taskInput.value = "";  // Limpar o campo de entrada
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}