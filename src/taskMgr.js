export default function TaskMgr() {
    const _tasks = [];

    const getTaskList = () => _tasks;

    const toggleTaskFinished = taskIdx => _tasks[taskIdx].finished = !_tasks[taskIdx].finished;

    const removeTask = taskIdx => _tasks.splice(taskIdx, 1);

    const addTask = task => _tasks.push(task);

    return {
        getTaskList,
        toggleTaskFinished,
        removeTask,
        addTask
    }
}