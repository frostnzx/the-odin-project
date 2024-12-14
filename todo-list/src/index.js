import "./style.css";
import * as DOMhandler from "./DOMhandler";
import ProjectManager from "./projectManager";
import TaskManager from "./taskManager.js";

const projectManager = new ProjectManager();
const taskManager = new TaskManager();

function init() {
  DOMhandler.init(projectManager, taskManager);
}

init();

window.addEventListener("unload", () => {
  projectManager.destructor();
  taskManager.destructor();
});
