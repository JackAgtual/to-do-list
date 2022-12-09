export default function ProjectMgr() {
    const _projects = []; // _projects is an array of strings

    const getAllProjects = () => _projects;

    const addProject = projectName => _projects.push(projectName);

    return {
        getAllProjects,
        addProject
    }
}