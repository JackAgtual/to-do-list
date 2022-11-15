export default function SidebarDom() {
    
    const inputNewProject = () => {
        const projectsList = document.querySelector('#project-list');

        const newProjectForm = document.createElement('form');
        newProjectForm.classList.add('form-new-project')
        newProjectForm.innerHTML = `<input id="project-name-input" type="text">`;

        // add form
        projectsList.appendChild(newProjectForm);

        // add project when form is submitted
        newProjectForm.addEventListener('submit', e => {
            e.preventDefault();
            _addProjectNameToList(
                document.getElementById('project-name-input').value,
                projectsList
            );
            newProjectForm.remove();
        });
    }

    const _addProjectNameToList = (projectName, projectsList) => {
        const newProject = document.createElement('li');
        newProject.innerHTML = `<span>${projectName}</span>`;
        projectsList.appendChild(newProject);
    }

    return {
        inputNewProject
    }
}