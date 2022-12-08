import './styles.css'
import TaskDom from './taskDom'
import TaskMgr from './taskMgr'
import SidebarDom from './sidebarDom'

const taskMgr = TaskMgr();
// TODO: make sidebarDom and taskDom global
// TODO: make projectMgr separate class outisde sidbar (one class for managing projects, one for dom manipulation)

const sidebarController = SidebarDom(taskMgr);
const taskController = TaskDom(taskMgr, sidebarController);

const addTask = document.querySelector('#add-task');
addTask.addEventListener('click', taskController.inputNewTask)

// sidebar filters
sidebarController.addEventListenerToDateFilters(taskController);

// Adding a project
const addProject = document.querySelector('#add-project');
addProject.addEventListener('click', sidebarController.inputNewProject);

// for debugging
taskController.renderTasks(taskMgr.getAllTasks());