import './styles.css'
import TaskDom from './taskDom'
import TaskMgr from './taskMgr'
import SidebarTaskFilterDom from './sidebarDom'
import ProjectMgr from './projectMgr'
import ProjectDom from './projectDom'

// TODO: figure out what to do if person adds a task when they are in filtered view
// TODO: When filtering by projecet, adding task should default to filtered project

window.TaskMgr = TaskMgr();
window.ProjectMgr = ProjectMgr();

const sidebarController = SidebarTaskFilterDom();
const projectController = ProjectDom(sidebarController);
const taskController = TaskDom(projectController);

const addTask = document.querySelector('#add-task');
addTask.addEventListener('click', taskController.inputNewTask)

// sidebar filters
sidebarController.addEventListenerToDateFilters(taskController);

// Adding a project
projectController.addNewProjectEventListener();
