export default function SidebarDom() {
    // TODO: Fix alignment of project lists
    //       probably put them in the outter sidebar div
    const getProjects = () => {
        const projectsList = document.querySelector('#project-list');
        return [...projectsList.children].map(child => child.innerText);
    }
    
    const inputNewProject = () => {
        const projectsList = document.querySelector('#project-list');

        const newProjectForm = document.createElement('form');
        newProjectForm.classList.add('form-new-project')
        newProjectForm.innerHTML = `<input id="project-name-input" type="text">`;

        // add form
        projectsList.appendChild(newProjectForm);
        document.getElementById('project-name-input').select();

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
        newProject.classList.add('clickable')
        newProject.innerHTML = `<span>${projectName}</span>`;
        projectsList.appendChild(newProject);
    }

    return {
        getProjects,
        inputNewProject
    }
}