import pencil  from './icons/pencil.svg'
import trash from './icons/trash.svg'

export default function TaskDom() {
    const clearTasks = () => {
        const content = document.querySelector('#content');
        content.innerHTML = '';
    }

    const addTask = task => {
        const content = document.querySelector('#content');

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        taskDiv.innerHTML = `
            <span class="task-toggle"></span>
            <h3 class="task-title">${task.title}</h3>
            <p class="task-description">${task.description}</p>
            <p class="task-project">${task.project}</p>
            <p class="task-due-date">${task.dueDate}</p>
            <img class="icon" src="${pencil}">
            <img class="icon" src="${trash}">
        `;

        content.appendChild(taskDiv)
    }

    const addTaskList = taskList => {
        taskList.forEach(task => {
            addTask(task);
        });
    }

    return {
        clearTasks,
        addTask,
        addTaskList
    };
}