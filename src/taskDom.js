import pencil  from './icons/pencil.svg'
import trash from './icons/trash.svg'

export default function TaskDom() {

    const _getContent = () => document.getElementById('content');
    let _currentlyInputtingTask = false;
    const _tasks = [];
    
    const clearTasks = () => {
        const content = _getContent();
        content.innerHTML = '';
    }

    const addTask = task => {
        _tasks.push(task);
        
        const content = _getContent()

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

    const inputNewTask = () => {
        if (_currentlyInputtingTask) return;
        _currentlyInputtingTask = true;

        const content = _getContent();
        
        const form = document.createElement('form');

        form.innerHTML = `
            <div class="form-element">
                <label for="title">Title:</label>
                <input type="text" id="title">
            </div>
            
            <div class="form-element">
                <label for="description">Description</label>
                <input type="text" id="description">
            </div>

            <div class="form-element">
                <label for="project">Project:</label>
                <select name="project" id="project">
                    <option value="none"></option>
                    <option value="Project1">Project1</option>
                    <option value="Project2">Project2</option>
                    <option value="Project3">Project3</option>
                </select>
            </div>

            <div class="form-element">
                <label for="due-date">Due date:</label>
                <input type="date" id="due-date">
            </div>

            <button id="add-task-submit">Add</button>
        `;

        content.appendChild(form);

        const submitBtn = document.getElementById('add-task-submit');
        submitBtn.addEventListener('click', e => {
            e.preventDefault();

            _currentlyInputtingTask = false;

            addTask({
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                project: document.getElementById('project').value,
                dueDate: document.getElementById('due-date').value,
            });

            form.remove();

            console.log(_tasks)
        })
    }

    return {
        clearTasks,
        addTask,
        addTaskList,
        inputNewTask
    };
}