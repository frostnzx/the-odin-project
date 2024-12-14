import * as DOMhandler from "./DOMhandler";

export default class ProjectManager {
  constructor() {
    this.projectList = JSON.parse(localStorage.getItem("projects") || "[]");
  }

  getList() {
    return this.projectList;
  }
  getSize() {
    return this.projectList.length;
  }
  taskCount(projectName, taskManager) {
    let count = taskManager.getList().filter((task) => {
      return task.getProject() == projectName;
    }).length;

    return count;
  }
  loadProject(projectName, taskManager) {
    DOMhandler.loadProjectPage(projectName, this, taskManager);
  }

  addProject(projectName, taskManager) {
    this.projectList.push(projectName); // push new project name into array of project names
    this.loadProject(projectName, taskManager);
  }
  removeProject(projectName) {
    this.projectList.splice(this.projectList.indexOf(projectName), 1);
  }

  destructor() {
    localStorage.setItem("projects", JSON.stringify(this.projectList));
  }
}
