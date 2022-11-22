import './styles.css'
import { format, parse } from 'date-fns'
import TaskDom from './taskDom'
import TaskMgr from './taskMgr'
import SidebarDom from './sidebarDom'

const domController = TaskDom();
const taskMgr = TaskMgr();
const sidebarMgr = SidebarDom();

const addTask = document.querySelector('#add-task');
addTask.addEventListener('click', domController.inputNewTask)

// Adding a project
const addProject = document.querySelector('#add-project');
addProject.addEventListener('click', sidebarMgr.inputNewProject);

const task1 = {
    title: 't1',
    description: 'd1',
    dueDate: '',
    project: '',
    finished: false
}

const task2 = {
    title: 't2',
    description: 'd2',
    dueDate: '',
    project: '',
    finished: false
}

const task3 = {
    title: 't3',
    description: 'd3',
    dueDate: '',
    project: '',
    finished: true
}

domController._addTaskToDom(task1)
domController._addTaskToDom(task2)
domController._addTaskToDom(task3)