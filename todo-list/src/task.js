export default class task {
  constructor(taskName, projectName, taskDate) {
    this.name = taskName;
    this.project = projectName;
    this.date = new Date(taskDate);
    this.completion = false;
  }
  getName() {
    return this.name;
  }
  getProject() {
    return this.project;
  }
  getDate() {
    return this.date;
  }
  isComplete() {
    return this.completion;
  }
  taskRename(newName) {
    this.name = newName;
  }
  taskCompleteToggle() {
    this.completion = !this.completion;
  }
}
