import './styles.css'
import TaskDom from './taskDom'
import TaskMgr from './taskMgr'
import SidebarDom from './sidebarDom'
import ProjectMgr from './projectMgr'
import ProjectDom from './projectDom'

const taskMgr = TaskMgr();
const projectMgr = ProjectMgr();
window.taskMgr = taskMgr; // for debugging

const sidebarController = SidebarDom(taskMgr);
const projectController = ProjectDom(projectMgr);
const taskController = TaskDom(taskMgr, projectController);

const addTask = document.querySelector('#add-task');
addTask.addEventListener('click', taskController.inputNewTask)

// sidebar filters
sidebarController.addEventListenerToDateFilters(taskController);

// Adding a project
projectController.addNewProjectEventListener();

// for debugging
taskController.renderTasks(taskMgr.getAllTasks());