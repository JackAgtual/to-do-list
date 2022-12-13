export default function SidebarTaskFilterController(Storage) {

    const _currentlySelectedClass = 'selected-filter';
    let _previouslySelectedFilter;

    const _inbox = document.getElementById('inbox');
    const _today = document.getElementById('today');
    const _thisWeek = document.getElementById('this-week');

    const _init = () => {
        // initialize inbox as selected filter
        _inbox.classList.add(_currentlySelectedClass);
        _previouslySelectedFilter = _inbox;
    }

    const addEventListenerToDateFilters = domController => {
        _inbox.addEventListener('click', () => {
            domController.renderTasks(window.TaskMgr.getAllTasks());
            _updateSelectedFilter(_inbox, 'inbox');
        });
        _today.addEventListener('click', () => {
            domController.renderTasks(window.TaskMgr.getTasksToday());
            _updateSelectedFilter(_today, 'today');
        });
        _thisWeek.addEventListener('click', () => {
            domController.renderTasks(window.TaskMgr.getTasksThisWeek());
            _updateSelectedFilter(_thisWeek, 'this-week');
        });
    }

    const addEventListenerToProjectFilter = (projectHtmlElement, projectName, renderTasksFunction) => {
        projectHtmlElement.addEventListener('click', () => {
            renderTasksFunction(window.TaskMgr.getTasksFromProject(projectName))
            _updateSelectedFilter(projectHtmlElement, projectName)
        })
    }

    const _updateSelectedFilter = (newFilterElement, filterName) => {
        newFilterElement.classList.add(_currentlySelectedClass);
        _previouslySelectedFilter.classList.remove(_currentlySelectedClass)
        _previouslySelectedFilter = newFilterElement;
        Storage.updateSidebarFilter(filterName);
    }

    const applyFilter = (filterName, domController) => {
        switch (filterName.toLowerCase()) {
            case 'inbox':
                domController.renderTasks(window.TaskMgr.getAllTasks());
                _updateSelectedFilter(_inbox, 'inbox');
                break
            case 'today':
                domController.renderTasks(window.TaskMgr.getTasksToday());
                _updateSelectedFilter(_today, 'today');
                break
            case 'this-week':
                domController.renderTasks(window.TaskMgr.getTasksThisWeek());
                _updateSelectedFilter(_thisWeek, 'this-week');
                break
            default:
                // project filter selected
                domController.renderTasks(window.TaskMgr.getTasksFromProject(filterName));
                _updateSelectedFilter(
                    domController.getProjectHtmlElementFromProjectName(filterName),
                    filterName
                )

        }
    }

    _init();

    return {
        addEventListenerToDateFilters,
        addEventListenerToProjectFilter,
        applyFilter
    }
}