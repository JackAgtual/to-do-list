export default function TaskMgr() {
    const _tasks = [];

    const getTaskList = () => _tasks;

    const getTaskAtIdx = taskIdx => _tasks[taskIdx];

    const editTaskAtIdx = (idx, updatedTask) => _tasks[idx] = updatedTask;
    
    const toggleTaskFinished = taskIdx => _tasks[taskIdx].finished = !_tasks[taskIdx].finished;

    const removeTask = taskIdx => _tasks.splice(taskIdx, 1);

    const addTask = task => _tasks.push(task);

    return {
        getTaskList,
        getTaskAtIdx, 
        editTaskAtIdx, 
        toggleTaskFinished,
        removeTask,
        addTask
    }
}