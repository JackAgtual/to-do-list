export default function ProjectMgr(storage) {
    let _projects = []; // _projects is an array of strings

    const overwriteAllProjects = newProjectArray => _projects = newProjectArray;

    const getAllProjects = () => _projects;

    const addProject = projectName => {
        _projects.push(projectName);
        storage.updateProjectArray(_projects);
    }

    const projectNameAlreadyExists = projectName => _projects.map(project => project.toLowerCase()).includes(projectName.toLowerCase())

    return {
        overwriteAllProjects,
        getAllProjects,
        addProject,
        projectNameAlreadyExists
    }
}