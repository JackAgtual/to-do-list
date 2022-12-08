import { isToday, parse, nextSunday, isSunday, isBefore, isSameDay } from 'date-fns'
// TODO: figure out what to do if person adds a task when they are in filtered view
// TODO: When filtering by projecet, adding task should default to filtered project
// TODO: Allow user to input task without due date

export default function TaskMgr() {
    const _tasks = [];

    const getAllTasks = () => _tasks;

    const getTaskAtIdx = taskIdx => _tasks[taskIdx];

    const editTaskAtIdx = (idx, updatedTask) => _tasks[idx] = updatedTask;

    const toggleTaskFinished = taskIdx => _tasks[taskIdx].finished = !_tasks[taskIdx].finished;

    const removeTask = taskIdx => _tasks.splice(taskIdx, 1);

    const addTask = task => _tasks.push(task);

    const getTasksToday = () => _tasks.filter(task => isToday(parse(task.dueDate, 'MM/dd/yyyy', new Date())))

    const getTasksThisWeek = () => _tasks.filter(task => {
        const today = new Date()
        const dueDate = parse(task.dueDate, 'MM/dd/yyyy', new Date())
        const endOfWeek = isSunday(today) ? dueDate : nextSunday(today)

        if (isBefore(dueDate, endOfWeek) || isSameDay(dueDate, endOfWeek)) return true
        return false;
    })

    return {
        getAllTasks,
        getTasksToday,
        getTasksThisWeek,
        getTaskAtIdx,
        editTaskAtIdx,
        toggleTaskFinished,
        removeTask,
        addTask
    }
}