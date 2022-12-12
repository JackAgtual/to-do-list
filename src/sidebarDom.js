export default function SidebarTaskFilterDom() {

    const addEventListenerToDateFilters = domController => {
        document.getElementById('inbox').addEventListener('click', () => domController.renderTasks(window.TaskMgr.getAllTasks()));
        document.getElementById('today').addEventListener('click', () => domController.renderTasks(window.TaskMgr.getTasksToday()));
        document.getElementById('this-week').addEventListener('click', () => domController.renderTasks(window.TaskMgr.getTasksThisWeek()));
    }

    const addEventListenerToProjectFilter = (projectHtmlElement, projectName, domController) => {
        projectHtmlElement.addEventListener('click', () => {
            domController.renderTasks(window.TaskMgr.getTasksFromProject(projectName))
        })
    }

    return {
        addEventListenerToDateFilters,
        addEventListenerToProjectFilter
    }
}