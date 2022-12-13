import './styles.css'
import TaskMgr from './taskMgr'
import ProjectMgr from './projectMgr'
import SidebarTaskFilterController from './sidebarFilterController'
import TaskAndProjectController from './taskAndProjectController'

// TODO: figure out what to do if person adds a task when they are in filtered view
// TODO: When filtering by projecet, adding task should default to filtered project

window.TaskMgr = TaskMgr();
window.ProjectMgr = ProjectMgr();

const sidebarFilterController = SidebarTaskFilterController();
const taskAndProjectcontroller = TaskAndProjectController(sidebarFilterController);

// sidebar filters
sidebarFilterController.addEventListenerToDateFilters(taskAndProjectcontroller);
