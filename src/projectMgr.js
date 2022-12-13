export default function ProjectMgr(storage) {
    let _projects = []; // _projects is an array of strings

    const overwriteAllProjects = newProjectArray => _projects = newProjectArray;

    const getAllProjects = () => _projects;

    const addProject = projectName => {
        _projects.push(projectName);
        storage.updateProjectArray(_projects);
    }

    return {
        overwriteAllProjects,
        getAllProjects,
        addProject
    }
}