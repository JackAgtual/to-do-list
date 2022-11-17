import pencil  from './icons/pencil.svg'
import trash from './icons/trash.svg'
import SidebarDom from './sidebarDom';
import TaskMgr from './taskMgr';

const taskMgr = TaskMgr();
const sidebarMgr = SidebarDom();

export default function TaskDom() {

    const _getContent = () => document.getElementById('content');
    let _currentlyInputtingTask = false;
    const _idxAttr = 'data-idx';
    
    const _addTaskToDom = task => {
        
        const content = _getContent()

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.setAttribute(_idxAttr, taskMgr.getTaskList().length)

        const finished = task.finished ? 'finished' : '';

        taskDiv.innerHTML = `
            <span class="task-toggle clickable ${finished}"></span>
            <h3 class="task-title">${task.title}</h3>
            <p class="task-description">${task.description}</p>
            <p class="task-project">${task.project}</p>
            <p class="task-due-date">${task.dueDate}</p>
            <img class="icon clickable" src="${pencil}">
            <img class="icon clickable" src="${trash}">
        `;
        
        // adding event listeners
        _toggleTaskFinished(taskDiv);
        _removeTaskEvent(taskDiv);

        content.appendChild(taskDiv);
        taskMgr.addTask(task);
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
                finished: false,
            });

            form.remove();
        });
    }

    const _getProjectListHtml = () => {
        const projectList = sidebarMgr.getProjects();
        
        return projectList.reduce(
            (prev, cur) => prev + `<option value="${cur}">${cur}</option>`,
            '<option value=""></option>'
        );
    }

    const _toggleTaskFinished = taskDomElement => {
        // assuming toggle button (span) is the first element
        const toggleBtn = taskDomElement.firstElementChild;
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('finished');

            taskMgr.toggleTaskFinished(
                Number(taskDomElement.getAttribute(_idxAttr))
            );
        });
    }

    const _removeTaskEvent = taskDomElement => {
        // assuming delete btn (img) is the last element
        const deleteBtn = taskDomElement.lastElementChild;

        deleteBtn.addEventListener('click', () => {

            taskMgr.removeTask(
                Number(taskDomElement.getAttribute(_idxAttr))
            );

            // adjust indecies of following tasks
            let curSibling = taskDomElement.nextSibling;
            while (curSibling) {
                const curIdx = Number(curSibling.getAttribute(_idxAttr));
                curSibling.setAttribute(_idxAttr, curIdx - 1);
                curSibling = curSibling.nextSibling;
            }

            taskDomElement.remove();
        });
    }

    return {
        inputNewTask
    };
}