import { isToday, parse, nextSunday, isSunday, isBefore, isSameDay } from 'date-fns'

export default function TaskMgr() {
    const _tasks = [
        {
            title: 'task today 1',
            description: 'a task description',
            project: '',
            dueDate: '12/03/2022',
            finished: false,
        },
        {
            title: 'task today 2',
            description: 'a task description',
            project: '',
            dueDate: '12/03/2022',
            finished: false,
        },
        {
            title: 'task today 3',
            description: 'a task description',
            project: '',
            dueDate: '12/03/2022',
            finished: true,
        },
        {
            title: 'task tomorrow 1',
            description: 'a task description',
            project: '',
            dueDate: '12/04/2022',
            finished: false,
        },
        {
            title: 'next week 1',
            description: 'a task description',
            project: '',
            dueDate: '12/11/2022',
            finished: false,
        },
    ];

    const getAllTasks = () => _tasks;

    const getTaskAtIdx = taskIdx => _tasks[taskIdx];

    const editTaskAtIdx = (idx, updatedTask) => _tasks[idx] = updatedTask;
    
    const toggleTaskFinished = taskIdx => _tasks[taskIdx].finished = !_tasks[taskIdx].finished;

    const removeTask = taskIdx => _tasks.splice(taskIdx, 1);

    const addTask = task => _tasks.push(task);

    const getTasksToday = () => _tasks.filter(task => isToday(parse(task.dueDate, 'MM/dd/yyyy', new Date())))

    const getTasksThisWeek = () =>  _tasks.filter(task => {
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