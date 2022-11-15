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