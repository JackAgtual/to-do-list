import pencil from './icons/pencil.svg'
import trash from './icons/trash.svg'
import floppy from './icons/floppy.svg'
import close from './icons/close-circle.svg'
import { parse, format } from 'date-fns'

export default function TaskAndProjectController(SidebarController) {
    let _currentlyInputtingTask = false;
    const _idxAttr = 'data-idx';

    const _init = () => {
        _addTaskEventListener();
        _addNewProjectEventListener();
    }

    // ***** Task Controller Functions *****
    const renderTasks = taskList => {
        if (taskList === undefined) return;

        const content = _getContent();
        content.innerHTML = '';
        taskList.forEach(task => {
            if (!task.idx) _addTaskToDom(task)
            else _addTaskToDom(task, task.idx)
        }
        );
    }

    const inputNewTask = () => {
        if (_currentlyInputtingTask) return;
        _currentlyInputtingTask = true;

        const content = _getContent();
        const form = _generateTaskForm();
        content.appendChild(form);
        document.getElementById('title').select();

        _submitBtnEventListener(form);
        _discardTaskEventListener(form)
    }

    // ***** Task Controller Helper Functions *****
    const _getContent = () => document.getElementById('content');

    const _addTaskEventListener = () => document.querySelector('#add-task').addEventListener('click', inputNewTask);

    const _getTaskIdx = taskDomElement => Number(taskDomElement.getAttribute(_idxAttr));

    const _addTaskToDom = (task, idx) => {

        const content = _getContent()

        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        let taskIdx;
        if (idx === undefined) {
            if (task.idx === undefined) taskIdx = window.TaskMgr.getAllTasks().length; // appending task to end
            else taskIdx = task.idx; // edditing task at idx
        }
        else taskIdx = idx;

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
                <input type="date" id="due-date" value="${_userDateFormatToHtmlDateFormat(task.dueDate)}">
            </div>
            <div class="form-btns">
                ${btn}
                <img class="icon clickable" id="discard" src="${close}">
            </div>
        `;

        return form;
    }

    const _htmlDateFormatToUserDateFormat = dateStr => {
        if (dateStr === '') return '';

        const date = parse(dateStr, 'yyyy-MM-dd', new Date());
        return format(date, 'MM/dd/yyyy');
    }

    const _userDateFormatToHtmlDateFormat = dateStr => {
        if (dateStr === '') return '';

        const date = parse(dateStr, 'MM/dd/yyyy', new Date());
        return format(date, 'yyyy-MM-dd');
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
                dueDate: _htmlDateFormatToUserDateFormat(document.getElementById('due-date').value),
                finished: false,
            };


            if (taskIdx === undefined) {
                // Adding a new task
                _addTaskToDom(task);
                window.TaskMgr.addTask(task);

            } else {
                // editing an existing task

                const taskIdx = _getTaskIdx(parentElement)
                task.idx = taskIdx;

                // need to get finished state from taskMgr 
                task.finished = window.TaskMgr.getTaskAtIdx(taskIdx).finished;

                _addTaskToDom(task, taskIdx);
                window.TaskMgr.editTaskAtIdx(taskIdx, task);
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

    const _toggleTaskFinished = taskDomElement => {
        // assuming toggle button (span) is the first element
        const toggleBtn = taskDomElement.firstElementChild;
        toggleBtn.addEventListener('click', () => {
            toggleBtn.classList.toggle('finished');
            window.TaskMgr.toggleTaskFinished(_getTaskIdx(taskDomElement));
        });
    }

    const _removeTaskEvent = taskDomElement => {
        // assuming delete btn (img) is the last element
        const deleteBtn = taskDomElement.lastElementChild;

        deleteBtn.addEventListener('click', () => {

            window.TaskMgr.removeTask(_getTaskIdx(taskDomElement));

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
            const task = window.TaskMgr.getTaskAtIdx(taskIdx);

            // remove contents
            const oldHTML = taskDomElement.innerHTML;
            taskDomElement.innerHTML = '';
            taskDomElement.classList.remove('task')

            // add form to user can edit
            const form = _generateTaskForm(task)
            taskDomElement.appendChild(form)
            document.getElementById('title').select();

            // select correct project from drop-down menu
            document.getElementById('project').selectedIndex = window.ProjectMgr.getAllProjects().indexOf(task.project) + 1;

            _currentlyInputtingTask = true;

            _submitBtnEventListener(taskDomElement, taskIdx);
            _discardTaskEventListener(taskDomElement, oldHTML);
        });
    }

    // ***** Project Controller Functions *****
    const inputNewProject = () => {
        const projectsListHtml = document.querySelector('#project-list');

        const newProjectForm = document.createElement('form');
        const inputElementId = 'project-name-input';
        newProjectForm.classList.add('form-new-project')
        newProjectForm.innerHTML = `<input id="${inputElementId}" type="text">`;

        // add form
        projectsListHtml.appendChild(newProjectForm);
        document.getElementById(inputElementId).select();

        // add project when form is submitted
        newProjectForm.addEventListener('submit', e => {
            e.preventDefault();

            const projectName = document.getElementById(inputElementId).value.trim();

            if (window.ProjectMgr.projectNameAlreadyExists(projectName)) {
                newProjectForm.remove();
                return
            }
            const newProject = _addProjectNameToPage(projectName, projectsListHtml);
            newProjectForm.remove();

            // Add event listener project filter 
            SidebarController.addEventListenerToProjectFilter(newProject, projectName, renderTasks)

            window.ProjectMgr.addProject(projectName)
        });
    }

    const renderProjectList = projectList => {
        const projectListElement = document.getElementById('project-list');

        projectList.forEach(projectName => {
            const projectBtn = _addProjectNameToPage(projectName, projectListElement)
            SidebarController.addEventListenerToProjectFilter(projectBtn, projectName, renderTasks)
        })
    }

    const getProjectHtmlElementFromProjectName = projectName => {
        const projectListHtml = document.getElementById('project-list');
        for (const child of projectListHtml.children) {
            if (child.firstChild.innerText === projectName) return child;
        }
    }

    // ***** Project Controller Helper Functions *****
    const _addNewProjectEventListener = () => {
        const addProject = document.querySelector('#add-project');
        addProject.addEventListener('click', inputNewProject);
    }

    const _getProjectListHtml = () => {
        const projectList = window.ProjectMgr.getAllProjects();

        return projectList.reduce(
            (prev, cur) => prev + `<option value="${cur}">${cur}</option>`,
            '<option value=""></option>'
        );
    }

    const _addProjectNameToPage = (projectName, projectsListHtml) => {
        const newProject = document.createElement('li');
        newProject.classList.add('clickable')
        newProject.innerHTML = `<span class="project-name">${projectName}</span>`;
        projectsListHtml.appendChild(newProject);
        return newProject;
    }

    // ***** Initialize Controller *****
    _init();

    return {
        inputNewTask,
        renderTasks,
        inputNewProject,
        renderProjectList,
        getProjectHtmlElementFromProjectName
    };
}