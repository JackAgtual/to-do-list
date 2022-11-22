import pencil  from './icons/pencil.svg'
import trash from './icons/trash.svg'
import floppy from './icons/floppy.svg'
import close from './icons/close-circle.svg'
import SidebarDom from './sidebarDom';
import TaskMgr from './taskMgr';

const taskMgr = TaskMgr();
const sidebarMgr = SidebarDom();

export default function TaskDom() {

    const _getContent = () => document.getElementById('content');
    let _currentlyInputtingTask = false;
    const _idxAttr = 'data-idx';

    const _getTaskIdx = taskDomElement => Number(taskDomElement.getAttribute(_idxAttr));
    
    const _addTaskToDom = (task, idx) => {
        
        const content = _getContent()

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const taskIdx = idx === undefined ? taskMgr.getTaskList().length : idx;
        taskDiv.setAttribute(_idxAttr, taskIdx)

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
        _editTaskEvent(taskDiv);

        const referenceNode = document.querySelector(`[data-idx="${idx}"]`)
        content.insertBefore(taskDiv, referenceNode);

        // Update taskMgr
        if (idx === undefined) taskMgr.addTask(task);
        else taskMgr.editTaskAtIdx(idx, task);
    }

    const _generateTaskForm = task => {
        const form = document.createElement('form');
        form.classList.add('form-new-task')
        
        let btn = `
            <img class="icon clickable" id="add-task-submit" src="${floppy}">
        `;
        if (task === undefined) {
            // Adding a new task
            task = {
                title: '',
                description: '',
                project: '',
                dueDate: '',
            }
            btn = '<button id="add-task-submit">Add</button>';
        }

        form.innerHTML = `
            <div class="form-element">
                <label for="title">Title:</label>
                <input type="text" id="title" value="${task.title}">
            </div>
            
            <div class="form-element">
                <label for="description">Description</label>
                <input type="text" id="description" value="${task.description}">
            </div>

            <div class="form-element">
                <label for="project">Project:</label>
                <select name="project" id="project" value="${task.project}">
                    ${_getProjectListHtml()}
                </select>
            </div>

            <div class="form-element">
                <label for="due-date">Due date:</label>
                <input type="date" id="due-date" value="${task.dueDate}">
            </div>
            <div class="form-btns">
                ${btn}
                <img class="icon clickable" id="discard" src="${close}">
            </div>
        `;

        return form;
    }

    const _submitBtnEventListener = (parentElement, taskIdx) => {
        const submitBtn = document.getElementById('add-task-submit');
        submitBtn.addEventListener('click', e => {
            e.preventDefault();

            _currentlyInputtingTask = false;

            const task = {
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                project: document.getElementById('project').value,
                dueDate: document.getElementById('due-date').value,
                finished: false,
            };

            
            if (taskIdx === undefined) {
                // Adding a new task
                _addTaskToDom(task);
                
            } else {
                // editing an existing task
                
                const taskIdx = _getTaskIdx(parentElement)
                
                // need to get finished state from taskMgr 
                task.finished = taskMgr.getTaskAtIdx(taskIdx).finished;

                _addTaskToDom(task, taskIdx);
            }

            parentElement.remove();
        });
    }
    
    const _discardTaskEventListener = (parentElement, oldHTML) => {
        const discardBtn = document.getElementById('discard');
        discardBtn.addEventListener('click', e => {
            e.preventDefault();

            if (oldHTML === undefined) {
                // discard new task
                parentElement.remove();
            }
            else {
                // discard existing task edits
                
                parentElement.innerHTML = oldHTML;
                parentElement.classList.add('task')

                // adding event listeners
                _toggleTaskFinished(parentElement);
                _removeTaskEvent(parentElement);
                _editTaskEvent(parentElement);
            }

            _currentlyInputtingTask = false;
        })
    }

    const inputNewTask = () => {
        if (_currentlyInputtingTask) return;
        _currentlyInputtingTask = true;

        const content = _getContent();
        const form = _generateTaskForm();        
        content.appendChild(form);

        _submitBtnEventListener(form);
        _discardTaskEventListener(form)
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

            taskMgr.toggleTaskFinished(_getTaskIdx(taskDomElement));
        });
    }

    const _removeTaskEvent = taskDomElement => {
        // assuming delete btn (img) is the last element
        const deleteBtn = taskDomElement.lastElementChild;

        deleteBtn.addEventListener('click', () => {

            taskMgr.removeTask(_getTaskIdx(taskDomElement));

            // adjust indecies of following tasks
            let curSibling = taskDomElement.nextSibling;
            while (curSibling) {
                const curIdx = _getTaskIdx(curSibling);
                curSibling.setAttribute(_idxAttr, curIdx - 1);
                curSibling = curSibling.nextSibling;
            }

            taskDomElement.remove();
        });
    }

    const _editTaskEvent = taskDomElement => {
        const editBtnIdx = 5;
        const editBtn = taskDomElement.children.item(editBtnIdx);

        editBtn.addEventListener('click', () => {
            if (_currentlyInputtingTask) return;
            
            // get task info
            const taskIdx = _getTaskIdx(taskDomElement);
            const task = taskMgr.getTaskAtIdx(taskIdx);

            // remove contents
            const oldHTML = taskDomElement.innerHTML;
            taskDomElement.innerHTML = '';
            taskDomElement.classList.remove('task')

            // add form to user can edit
            const form = _generateTaskForm(task)
            taskDomElement.appendChild(form)

            _currentlyInputtingTask = true;

            _submitBtnEventListener(taskDomElement, taskIdx);
            _discardTaskEventListener(taskDomElement, oldHTML);
        });
    }

    return {
        inputNewTask,
        _addTaskToDom 
    };
}