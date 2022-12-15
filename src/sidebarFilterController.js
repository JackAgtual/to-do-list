export default function SidebarTaskFilterController(Storage) {

    const _currentlySelectedClass = 'selected-filter';
    let _previouslySelectedFilter;

    const dateFilterElements = {
        'inbox': document.getElementById('inbox'),
        'today': document.getElementById('today'),
        'this-week': document.getElementById('this-week')
    };

    const _init = () => {
        // initialize inbox as selected filter
        dateFilterElements.inbox.classList.add(_currentlySelectedClass);
        _previouslySelectedFilter = dateFilterElements.inbox;
    }

    const addEventListenerToDateFilters = domController => {
        dateFilterElements.inbox.addEventListener('click', () => _renderInbox(domController));
        dateFilterElements.today.addEventListener('click', () => _renderToday(domController));
        dateFilterElements['this-week'].addEventListener('click', () => _renderThisWeek(domController));
    }

    const addEventListenerToProjectFilter = (projectHtmlElement, projectName, renderTasksFunction) => {
        projectHtmlElement.addEventListener('click', () => {
            renderTasksFunction(window.TaskMgr.getTasksFromProject(projectName));
            _updateSelectedFilter(projectHtmlElement, projectName);
        })
    }

    const applyFilter = (filterName, domController) => {
        switch (filterName.toLowerCase()) {
            case 'inbox':
                _renderInbox(domController);
                break
            case 'today':
                _renderToday(domController);
                break
            case 'this-week':
                _renderThisWeek(domController);
                break
            default:
                // project filter selected
                domController.renderTasks(window.TaskMgr.getTasksFromProject(filterName));
                _updateSelectedFilter(
                    domController.getProjectHtmlElementFromProjectName(filterName),
                    filterName
                );
        }
    }

    const _updateSelectedFilter = (newFilterElement, filterName) => {
        newFilterElement.classList.add(_currentlySelectedClass);
        _previouslySelectedFilter.classList.remove(_currentlySelectedClass);
        _previouslySelectedFilter = newFilterElement;
        Storage.updateSidebarFilter(filterName);
    }

    const _renderInbox = domController => {
        domController.renderTasks(window.TaskMgr.getAllTasks());
        _updateSelectedFilter(dateFilterElements.inbox, 'inbox');
    }

    const _renderToday = domController => {
        domController.renderTasks(window.TaskMgr.getTasksToday());
        _updateSelectedFilter(dateFilterElements.today, 'today');
    }

    const _renderThisWeek = domController => {
        domController.renderTasks(window.TaskMgr.getTasksThisWeek());
        _updateSelectedFilter(dateFilterElements['this-week'], 'this-week');
    }

    _init();

    return {
        addEventListenerToDateFilters,
        addEventListenerToProjectFilter,
        applyFilter
    }
}