import { isToday, parse, nextSunday, isSunday, isBefore, isSameDay } from 'date-fns'

export default function TaskMgr() {
    const _tasks = [];

    /* task fields: {
        title: string,
        description: string,
        project: string,
        dueDate: string,
        finished: boolean,
        idx: int,
    }*/

    const getAllTasks = () => _tasks;

    const getTaskAtIdx = taskIdx => _tasks[taskIdx];

    const editTaskAtIdx = (idx, updatedTask) => _tasks[idx] = updatedTask;

    const toggleTaskFinished = taskIdx => _tasks[taskIdx].finished = !_tasks[taskIdx].finished;

    const removeTask = taskIdx => {
        _tasks.splice(taskIdx, 1);
        // update indecies of tasks after removed task
        for (let i = taskIdx; i < _tasks.length; i++) _tasks[i].idx -= 1;
    }

    const addTask = task => {
        task.idx = _tasks.length;
        _tasks.push(task);
    }

    const getTasksToday = () => _tasks.filter(task => isToday(parse(task.dueDate, 'MM/dd/yyyy', new Date())))

    const getTasksThisWeek = () => _tasks.filter(task => {
        const today = new Date()
        const dueDate = parse(task.dueDate, 'MM/dd/yyyy', new Date())
        const endOfWeek = isSunday(today) ? dueDate : nextSunday(today)

        if (isBefore(dueDate, endOfWeek) || isSameDay(dueDate, endOfWeek)) return true
        return false;
    })

    const getTasksFromProject = projectName => _tasks.filter(task => task.project === projectName);

    return {
        getAllTasks,
        getTasksToday,
        getTasksThisWeek,
        getTaskAtIdx,
        editTaskAtIdx,
        toggleTaskFinished,
        removeTask,
        addTask,
        getTasksFromProject
    }
}