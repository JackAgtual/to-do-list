export default function TaskMgr() {
    const _tasks = [
        {
            title: 'Title 1',
            description: 'This is the description for task 1',
            project: 'This task belongs to project 1',
            dueDate: '11/15/22'
        },
        {
            title: 'Title 2',
            description: 'This is the description for task 2',
            project: 'This task belongs to project 2',
            dueDate: '11/15/22'
        },
        {
            title: 'Title 3',
            description: 'This is the description for task 3',
            project: 'This task belongs to project 3',
            dueDate: '11/15/22'
        },
        {
            title: 'Title 4',
            description: 'This is the description for task 4',
            project: 'This task belongs to project 4',
            dueDate: '11/15/22'
        },
    ];

    const getTaskList = () => _tasks;

    return {
        getTaskList
    }
}