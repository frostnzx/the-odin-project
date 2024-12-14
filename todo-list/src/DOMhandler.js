// helper
function taskClear() {
  document.querySelector(".task-container").innerHTML = "";
}
function projectClear() {
  document.querySelector(".project-container").innerHTML = "";
}
function createNewTaskElement(newTask, taskManager) {
  const container = document.createElement("div");
  container.id = newTask.getName();
  container.classList.add("task-card");

  const taskBtn = document.createElement("button");
  if (newTask.isComplete()) {
    taskBtn.classList.add("task-done-btn");
    taskBtn.innerHTML = "Done";
  } else {
    taskBtn.classList.add("task-undone-btn");
    taskBtn.innerHTML = "Undone";
  }
  taskBtn.addEventListener("click", (event) => {
    event.preventDefault();
    taskBtn.classList.remove("task-done-btn");
    taskBtn.classList.remove("task-undone-btn");
    newTask.taskCompleteToggle();
    if (newTask.isComplete()) {
      taskBtn.classList.add("task-done-btn");
      taskBtn.innerHTML = "Done";
    } else {
      taskBtn.classList.add("task-undone-btn");
      taskBtn.innerHTML = "Undone";
    }
  });

  const taskName = document.createElement("div");
  taskName.classList.add("task-name");
  taskName.innerHTML = newTask.getName();

  const taskDate = document.createElement("div");
  taskDate.classList.add("task-date");
  taskDate.innerHTML = newTask.getDate().toLocaleDateString("en-US");

  const taskRemoveBtn = document.createElement("button");
  taskRemoveBtn.classList.add("task-remove-btn");
  taskRemoveBtn.innerHTML = "Remove";
  taskRemoveBtn.addEventListener("click", (event) => {
    event.preventDefault();
    taskManager.removeTask(newTask.getName());
    document.getElementById(newTask.getName()).remove();
  });

  container.appendChild(taskBtn);
  container.appendChild(taskName);
  container.appendChild(taskDate);
  container.appendChild(taskRemoveBtn);

  return container;
}
function createNewProjectElement(newProject, projectManager, taskManager) {
  const container = document.createElement("button");
  container.id = newProject;
  container.classList.add("project-btn");
  container.addEventListener("click", (event) => {
    event.preventDefault();
    taskClear();
    projectManager.loadProject(newProject, taskManager);
  });

  const projectName = document.createElement("div");
  projectName.classList.add("project-name");
  projectName.innerHTML = newProject;

  const projectRemoveBtn = document.createElement("button");
  projectRemoveBtn.innerHTML = "Remove";
  projectRemoveBtn.classList.add("project-remove-btn");

  projectRemoveBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    taskManager.removeAllProjectTask(newProject);
    projectManager.removeProject(newProject);
    const taskHeader = document.querySelector(".task-header");
    const taskListComponent = document.querySelector(".task-list-component");
    if (
      taskHeader.innerHTML == newProject ||
      taskHeader.innerHTML == "All Tasks"
    ) {
      loadAllPage(taskManager);
    }

    document.getElementById(newProject).remove();
    document.querySelector(".project-list-component").innerHTML =
      "Projects(" + projectManager.getSize() + ")";
  });

  container.appendChild(projectName);
  container.appendChild(projectRemoveBtn);
  return container;
}

// Main modules
function loadAllPage(taskManager) {
  taskClear();
  const taskContainer = document.querySelector(".task-container");
  taskManager.getList().forEach((task) => {
    const newElement = createNewTaskElement(task, taskManager);
    taskContainer.appendChild(newElement);
  });
  const taskHeader = document.querySelector(".task-header");
  taskHeader.innerHTML = "All Tasks";

  const taskListComponent = document.querySelector(".task-list-component");
  taskListComponent.innerHTML = "Tasks(" + taskManager.getSize() + ")";
}
function loadTodayPage(taskManager) {
  taskClear();
  let cnt = 0;
  const today = new Date();
  const taskContainer = document.querySelector(".task-container");
  taskManager
    .getList()
    .filter((task) => {
      return (
        task.getDate().toISOString().slice(0, 10) ==
        today.toISOString().slice(0, 10)
      );
    })
    .forEach((task) => {
      const newElement = createNewTaskElement(task, taskManager);
      taskContainer.appendChild(newElement);
      cnt++;
    });
  const taskHeader = document.querySelector(".task-header");
  taskHeader.innerHTML = "Today";

  const taskListComponent = document.querySelector(".task-list-component");
  taskListComponent.innerHTML = "Tasks(" + cnt + ")";
}
function loadCompletePage(taskManager) {
  taskClear();
  let cnt = 0;
  const taskContainer = document.querySelector(".task-container");
  taskManager
    .getList()
    .filter((task) => {
      return task.isComplete();
    })
    .forEach((task) => {
      const newElement = createNewTaskElement(task, taskManager);
      taskContainer.appendChild(newElement);
      cnt++;
    });
  const taskHeader = document.querySelector(".task-header");
  taskHeader.innerHTML = "Complete";

  const taskListComponent = document.querySelector(".task-list-component");
  taskListComponent.innerHTML = "Tasks(" + cnt + ")";
}
export function init(projectManager, taskManager) {
  const allBtn = document.querySelector(".all-btn");
  allBtn.addEventListener("click", (event) => {
    event.preventDefault();
    loadAllPage(taskManager);
  });
  const todayBtn = document.querySelector(".today-btn");
  todayBtn.addEventListener("click", (event) => {
    event.preventDefault();
    loadTodayPage(taskManager);
  });
  const completeBtn = document.querySelector(".complete-btn");
  completeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    loadCompletePage(taskManager);
  });

  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const newTaskModal = document.querySelector("#new-task-modal");
  const taskAddBtn = document.querySelector(".task-add-btn");
  taskAddBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newTaskModal.showModal();
    const newTaskProject = document.querySelector("#new-task-project");
    const currentProject = document.querySelector(".task-header").innerHTML;
    if (
      currentProject == "All Tasks" ||
      currentProject == "Today" ||
      currentProject == "Completed"
    ) {
      newTaskProject.innerHTML = "";
    } else newTaskProject.value = currentProject;
    document.querySelector("#new-task-date").value = formattedDate;
  });
  const taskAddSubmit = document.querySelector(".task-add-submit");
  taskAddSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const newTaskTitle = document.querySelector("#new-task-title");
    const newTaskProject = document.querySelector("#new-task-project");
    const newTaskDate = document.querySelector("#new-task-date");

    const newTaskTitleVal = newTaskTitle.value;
    const newTaskProjectVal = newTaskProject.value;
    const newTaskDateVal = newTaskDate.value;

    taskManager.addTask(newTaskTitleVal, newTaskProjectVal, newTaskDateVal);
    projectManager.loadProject(newTaskProjectVal, taskManager);

    newTaskTitle.value = "";
    newTaskProject.value = "";
    newTaskDate.value = formattedDate;
    newTaskModal.close();
  });

  const newProjectModal = document.querySelector("#new-project-modal");
  // Add project button
  const projectAddBtn = document.querySelector(".project-add-btn");
  projectAddBtn.addEventListener("click", (event) => {
    event.preventDefault();
    newProjectModal.showModal();
  });
  const projectAddSubmit = document.querySelector(".project-add-submit");
  projectAddSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const newProjectTitle = document.querySelector("#new-project-title");

    const newProjectNameFromModal = newProjectTitle.value;
    projectManager.addProject(newProjectNameFromModal, taskManager); // add new project to projectList
    projectManager.loadProject(newProjectNameFromModal, taskManager); // switch to new project page and load tasks
    fetchProject(projectManager, taskManager); // Display new project to DOM
    newProjectModal.close();
    newProjectTitle.value = "";
  });
  fetchProject(projectManager, taskManager);
  loadAllPage(taskManager);
}
function fetchProject(projectManager, taskManager) {
  projectClear();
  const projectContainer = document.querySelector(".project-container");
  projectManager.getList().forEach((projectName) => {
    const newElement = createNewProjectElement(
      projectName,
      projectManager,
      taskManager,
    );
    projectContainer.appendChild(newElement);
  });
  const projectListComponent = document.querySelector(
    ".project-list-component",
  );
  projectListComponent.innerHTML = "Projects(" + projectManager.getSize() + ")";
}
export function loadProjectPage(projectName, projectManager, taskManager) {
  taskClear();
  const taskHeader = document.querySelector(".task-header");
  taskHeader.innerHTML = projectName;
  const taskListComponent = document.querySelector(".task-list-component");
  taskListComponent.innerHTML =
    "Tasks(" + projectManager.taskCount(projectName, taskManager) + ")";

  const filteredTaskList = taskManager.getList().filter((task) => {
    return task.getProject() == projectName;
  });

  const taskContainer = document.querySelector(".task-container");
  filteredTaskList.forEach((task) => {
    const newElement = createNewTaskElement(task, taskManager);
    taskContainer.appendChild(newElement);
  });
}
