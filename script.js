document.addEventListener('DOMContentLoaded', function() {
    // Carregar tarefas do localStorage
    loadTasks();
    
    // Adicionar evento para o botão de adicionar tarefa
    document.getElementById('add-task').addEventListener('click', function() {
        const taskInput = document.getElementById('new-task');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Criar o item da tarefa
            const taskList = document.getElementById('task-list');
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `${taskText} <button class="delete">Excluir</button>`;

            // Adicionar o item à lista
            taskList.appendChild(taskItem);

            // Salvar a tarefa no localStorage
            saveTask(taskText);

            // Limpar o campo de input
            taskInput.value = '';

            // Adicionar evento de exclusão
            taskItem.querySelector('.delete').addEventListener('click', function() {
                taskItem.remove();
                removeTaskFromStorage(taskText);
            });

            // Adicionar evento de conclusão da tarefa
            taskItem.addEventListener('click', function() {
                taskItem.classList.toggle('completed');
            });
        }
    });
});

// Função para salvar tarefa no localStorage
function saveTask(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para carregar tarefas do localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    
    tasks.forEach(function(taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${taskText} <button class="delete">Excluir</button>`;
        taskList.appendChild(taskItem);
        
        taskItem.querySelector('.delete').addEventListener('click', function() {
            taskItem.remove();
            removeTaskFromStorage(taskText);
        });

        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });
    });
}

// Função para remover a tarefa do localStorage
function removeTaskFromStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}