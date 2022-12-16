import './styles.css'
import TaskMgr from './taskMgr'
import ProjectMgr from './projectMgr'
import SidebarTaskFilterController from './sidebarFilterController'
import TaskAndProjectController from './taskAndProjectController'
import Storage from './storage'
import TasksCompleteCounter from './tasksCompleteCounter'

// TODO: figure out what to do if person adds a task when they are in filtered view
// TODO: When filtering by projecet, adding task should default to filtered project
// TODO: Allow user to remove project. Make project blank for any tasks that have removed project
// TODO: Make site more responsive

const storage = Storage();
const tasksCompleteCounter = TasksCompleteCounter();

window.TaskMgr = TaskMgr(storage, tasksCompleteCounter);
window.ProjectMgr = ProjectMgr(storage);

const sidebarFilterController = SidebarTaskFilterController(storage);
const taskAndProjectcontroller = TaskAndProjectController(sidebarFilterController);

// sidebar filters
sidebarFilterController.addEventListenerToDateFilters(taskAndProjectcontroller);

// render state form local storage
storage.renderStateFromLocalStorage(sidebarFilterController, taskAndProjectcontroller);