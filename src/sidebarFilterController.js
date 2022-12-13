export default function SidebarTaskFilterController() {

    const _currentlySelectedClass = 'selected-filter';

    const _inbox = document.getElementById('inbox');
    const _today = document.getElementById('today');
    const _thisWeek = document.getElementById('this-week');

    // initialize inbox as selected filter
    _inbox.classList.add(_currentlySelectedClass)
    let _previouslySelectedFilter = _inbox;

    const addEventListenerToDateFilters = domController => {
        _inbox.addEventListener('click', () => {
            domController.renderTasks(window.TaskMgr.getAllTasks());
            _updateSelectedFilter(_inbox);
        });
        _today.addEventListener('click', () => {
            domController.renderTasks(window.TaskMgr.getTasksToday());
            _updateSelectedFilter(_today);
        });
        _thisWeek.addEventListener('click', () => {
            domController.renderTasks(window.TaskMgr.getTasksThisWeek());
            _updateSelectedFilter(_thisWeek);
        });
    }

    const addEventListenerToProjectFilter = (projectHtmlElement, projectName, renderTasksFunction) => {
        projectHtmlElement.addEventListener('click', () => {
            renderTasksFunction(window.TaskMgr.getTasksFromProject(projectName))
            _updateSelectedFilter(projectHtmlElement)
        })
    }

    const _updateSelectedFilter = newFilterElement => {
        newFilterElement.classList.add(_currentlySelectedClass);
        _previouslySelectedFilter.classList.remove(_currentlySelectedClass)
        _previouslySelectedFilter = newFilterElement;
    }

    return {
        addEventListenerToDateFilters,
        addEventListenerToProjectFilter
    }
}