export default function TaskMgr() {
    const _tasks = [];

    const getTaskList = () => _tasks;

    const addTask = task => _tasks.push(task);

    return {
        getTaskList,
        addTask
    }
}