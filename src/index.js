import './styles.css'
import { format, parse } from 'date-fns'
import TaskDom from './taskDom'
import TaskMgr from './taskMgr'

const domController = TaskDom();
const taskMgr = TaskMgr();

domController.clearTasks();
taskMgr.addTask('Title 1', 'a description for task 1', 'Project 1', '11/14/22')
taskMgr.addTask('Title 2', 'a description for task 2', 'Project 1', '11/14/22')
domController.addTaskList(taskMgr.getTaskList());
