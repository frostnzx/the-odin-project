import Task from "./task.js";

export default class taskManager {
  constructor() {
    this.taskList = JSON.parse(localStorage.getItem("tasks") || "[]").map(
      (data) => new Task(data.name, data.project, data.date),
    );
  }

  getList() {
    return this.taskList;
  }
  getSize() {
    return this.taskList.length;
  }

  addTask(taskName, projectName, taskDate) {
    let newTask = new Task(taskName, projectName, taskDate);
    this.taskList.push(newTask);
  }
  removeTask(taskName) {
    this.taskList.splice(this.taskList.indexOf(taskName), 1);
  }
  removeAllProjectTask(projectName) {
    this.taskList = this.taskList.filter((item) => {
      return item.getProject() != projectName;
    });
  }

  destructor() {
    localStorage.setItem("tasks", JSON.stringify(this.taskList));
  }
}
