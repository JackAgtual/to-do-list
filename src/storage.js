export default function Storage() {
    // storage factory function that saves to local storage tasks, procets, and sidebar filters
    // are added, modified, or deleted

    const _localStorageKey = 'data';

    let _data = {
        tasks: [],
        projects: [],
        sidebarFilter: 'inbox',
    };

    const getData = () => _data;

    const updateTaskArray = newTaskArray => {
        _data.tasks = newTaskArray;
        _setLocalStorage();
    }

    const updateProjectArray = newProjectArray => {
        _data.projects = newProjectArray;
        _setLocalStorage();
    }

    const updateSidebarFilter = newFilter => {
        _data.sidebarFilter = newFilter;
        _setLocalStorage();
    }

    const _setLocalStorage = () => localStorage.setItem(_localStorageKey, JSON.stringify(_data));

    const _localStorageIsValid = () => {
        if (!localStorage.getItem(_localStorageKey)) return false; // item does not exist

        return true;
    }

    const renderStateFromLocalStorage = (sidebarFilterController, taskAndProjectController) => {
        // note window.TaskMgr and window.ProjectMgr must be instantiated before calling this function
        if (!_localStorageIsValid()) return;

        _data = JSON.parse(localStorage.getItem(_localStorageKey));

        window.TaskMgr.overwriteAllTasks(_data.tasks);
        window.ProjectMgr.overwriteAllProjects(_data.projects);

        taskAndProjectController.renderTasks(_data.tasks);
        taskAndProjectController.renderProjectList(_data.projects);
        sidebarFilterController.applyFilter(_data.sidebarFilter, taskAndProjectController);
    }

    return {
        getData,
        updateTaskArray,
        updateProjectArray,
        updateSidebarFilter,
        renderStateFromLocalStorage
    }
}