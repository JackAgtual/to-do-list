import './styles.css'
import TaskDom from './taskDom'
import TaskMgr from './taskMgr'
import SidebarDom from './sidebarDom'

const domController = TaskDom();
const taskMgr = TaskMgr();
const sidebarMgr = SidebarDom();

const addTask = document.querySelector('#add-task');
addTask.addEventListener('click', domController.inputNewTask)
// sidebar filters
sidebarMgr.addEventListenerToDateFilters();

// Adding a project
const addProject = document.querySelector('#add-project');
addProject.addEventListener('click', sidebarMgr.inputNewProject);

// for debugging
domController.renderTasks(taskMgr.getAllTasks());