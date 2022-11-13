export default function TaskMgr() {
    const _tasks = [];

    const getTaskList = () => _tasks;

    const addTask = (title, description, project, dueDate) => {
        _tasks.push({title, description, project, dueDate});
    }

    return {
        getTaskList,
        addTask
    }
}