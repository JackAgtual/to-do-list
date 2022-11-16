import pencil  from './icons/pencil.svg'
import trash from './icons/trash.svg'
import SidebarDom from './sidebarDom';
import TaskMgr from './taskMgr';

const taskMgr = TaskMgr();
const sidebarMgr = SidebarDom();

export default function TaskDom() {

    const _getContent = () => document.getElementById('content');
    let _currentlyInputtingTask = false;
    
    const _addTaskToDom = task => {
        taskMgr.addTask(task);
        
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

    const inputNewTask = () => {
        if (_currentlyInputtingTask) return;
        _currentlyInputtingTask = true;

        const content = _getContent();
        
        const form = document.createElement('form');
        form.classList.add('form-new-task')

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
                    ${_getProjectListHtml()}
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

            _addTaskToDom({
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                project: document.getElementById('project').value,
                dueDate: document.getElementById('due-date').value,
            });

            form.remove();
        });
    }

    const _getProjectListHtml = () => {
        const projectList = sidebarMgr.getProjects();
        
        let projectsHtml = '<option value="none"></option>';
        projectList.forEach(project => {
            projectsHtml += `<option value="${project}">${project}</option>`;
        });

        return projectsHtml;
    }

    return {
        inputNewTask
    };
}