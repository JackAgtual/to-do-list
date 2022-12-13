import './styles.css'
import TaskMgr from './taskMgr'
import ProjectMgr from './projectMgr'
import SidebarTaskFilterController from './sidebarFilterController'
import TaskAndProjectController from './taskAndProjectController'
import Storage from './storage'

// TODO: figure out what to do if person adds a task when they are in filtered view
// TODO: When filtering by projecet, adding task should default to filtered project
// TODO: prevent user from inputting duplicate projects

const storage = Storage();
window.myStorage = storage;

window.TaskMgr = TaskMgr(storage);
window.ProjectMgr = ProjectMgr(storage);

const sidebarFilterController = SidebarTaskFilterController(storage);
const taskAndProjectcontroller = TaskAndProjectController(sidebarFilterController);

// sidebar filters
sidebarFilterController.addEventListenerToDateFilters(taskAndProjectcontroller);

storage.renderStateFromLocalStorage(sidebarFilterController, taskAndProjectcontroller);