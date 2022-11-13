import './styles.css'
import { format, parse } from 'date-fns'
import TaskDom from './taskDom'
import TaskMgr from './taskMgr'

const domController = TaskDom();
const taskMgr = TaskMgr();

domController.clearTasks();
domController.addTaskList(taskMgr.getTaskList());
