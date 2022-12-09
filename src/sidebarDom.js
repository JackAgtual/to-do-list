export default function SidebarDom(taskMgr) {

    const addEventListenerToDateFilters = domController => {
        document.getElementById('inbox').addEventListener('click', () => domController.renderTasks(taskMgr.getAllTasks()));
        document.getElementById('today').addEventListener('click', () => domController.renderTasks(taskMgr.getTasksToday()));
        document.getElementById('this-week').addEventListener('click', () => domController.renderTasks(taskMgr.getTasksThisWeek()));
    }

    return {
        addEventListenerToDateFilters
    }
}