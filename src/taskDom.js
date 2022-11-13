import pencil  from './icons/pencil.svg'
import trash from './icons/trash.svg'

export default function taskDom() {
    const clearTasks = () => {
        const content = document.querySelector('#content');
        content.innerHTML = '';
    }

    const addTaskToDom = task => {
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

    const addTaskListToDom = taskList => {
        taskList.forEach(task => {
            addTaskToDom(task);
        });
    }

    return {
        clearTasks,
        addTaskToDom,
        addTaskListToDom
    };
}