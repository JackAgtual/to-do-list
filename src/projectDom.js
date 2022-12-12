import TaskDom from './taskDom';

const TaskController = TaskDom(); // need to instatiate here to avoid circular dependency

export default function ProjectDom(SidebarController) {
    const inputNewProject = () => {
        const projectsListHtml = document.querySelector('#project-list');

        const newProjectForm = document.createElement('form');
        const inputElementId = 'project-name-input';
        newProjectForm.classList.add('form-new-project')
        newProjectForm.innerHTML = `<input id="${inputElementId}" type="text">`;

        // add form
        projectsListHtml.appendChild(newProjectForm);
        document.getElementById(inputElementId).select();

        // add project when form is submitted
        newProjectForm.addEventListener('submit', e => {
            e.preventDefault();

            const projectName = document.getElementById(inputElementId).value
            const newProject = _addProjectNameToPage(projectName, projectsListHtml);
            newProjectForm.remove();

            // Add event listener project filter 
            SidebarController.addEventListenerToProjectFilter(newProject, projectName, TaskController)

            window.ProjectMgr.addProject(projectName)
        });
    }

    const _addProjectNameToPage = (projectName, projectsListHtml) => {
        const newProject = document.createElement('li');
        newProject.classList.add('clickable')
        newProject.innerHTML = `<span>${projectName}</span>`;
        projectsListHtml.appendChild(newProject);
        return newProject;
    }

    const getProjectListHtml = () => {
        const projectList = window.ProjectMgr.getAllProjects();

        return projectList.reduce(
            (prev, cur) => prev + `<option value="${cur}">${cur}</option>`,
            '<option value=""></option>'
        );
    }

    const addNewProjectEventListener = () => {
        const addProject = document.querySelector('#add-project');
        addProject.addEventListener('click', inputNewProject);
    }

    return {
        inputNewProject,
        getProjectListHtml,
        addNewProjectEventListener
    }
}