import './styles.css'
import { format, parse } from 'date-fns'
import TaskDom from './taskDom'
import TaskMgr from './taskMgr'

const domController = TaskDom();
const taskMgr = TaskMgr();

const addTask = document.querySelector('#add-task');
addTask.addEventListener('click', domController.inputNewTask)