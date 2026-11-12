import { Task } from "./task.js";

export class TaskInterface {
  tasks;
  ulList;
  pMissionCount;
  formAddTask;
  inputTaskName;
  selectTaskRank;
  addTaskButton;

  constructor(tasks) {
    this.tasks = [...tasks];
    this.ulList = document.querySelector(".task-list .list");
    this.pMissionCount = document.querySelector(".mission-count span");
    this.formAddTask = document.querySelector("form");
    this.inputTaskName = document.querySelector("form input#task-name");
    this.selectTaskRank = document.querySelector("form select#task-rank");
    this.addTaskButton = document.querySelector(".add-task-button");

    this.handleAddTask();
  }

  clearList() {
    while (this.ulList.firstChild) {
      this.ulList.removeChild(this.ulList.firstChild);
    }
  }

  updateStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  handleAddTask() {
    this.formAddTask.onsubmit = (e) => {
      e.preventDefault();

      const taskName = this.inputTaskName.value;
      const taskRank = this.selectTaskRank.value;

      if (!taskName.trim()) return;

      const newTask = new Task({ name: taskName, rankName: taskRank });

      this.tasks.push(newTask);

      this.inputTaskName.value = "";
      this.selectTaskRank.value = "A";

      this.updateStorage();
      this.clearList();
      this.build();
    };
  }

  deleteTask(taskId) {
    const newTaskList = this.tasks.filter((e) => !(e.id === taskId));

    this.tasks = newTaskList;

    this.updateStorage();
    this.clearList();
    this.build();
  }

  build() {
    for (let i = 0; i < this.tasks.length; i++) {
      /* Criando funções */

      const updateTaskState = (isCompleted) => {
        if (isCompleted) {
          this.tasks[i].complete();
          inputTaskCheckbox.checked = true;
          pCompleteOrPendent.textContent = "Concluída!";
          pCompleteDate.textContent = this.tasks[i].statusInfo.completeDate;

          liTask.classList.add("completed");
          pCompleteOrPendent.classList.remove("text-muted");
          pCompleteOrPendent.classList.add("text-green");
          pCompleteDate.classList.add("text-muted");
          buttonEdit.disabled = true;
          buttonDelete.disabled = true;
        } else {
          this.tasks[i].uncomplete();
          inputTaskCheckbox.checked = false;
          pCompleteOrPendent.textContent = "Pendente.";
          pCompleteDate.textContent = "";

          liTask.classList.remove("completed");
          pCompleteOrPendent.classList.remove("text-green");
          pCompleteOrPendent.classList.add("text-muted");
          buttonEdit.disabled = false;
          buttonDelete.disabled = false;
        }
        this.updateStorage();
      };

      /* Criando variaveis */
      const isComplete = this.tasks[i].statusInfo.statusTask;
      const textCompleteOrPendent = isComplete ? "Concluída!" : "Pendente.";
      const svgComplete = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2ced91"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-check-big preview-icon svg-complete"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>`;
      const svgPendent = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-dashed-check preview-icon svg-pendent"
                >
                  <path d="M10.1 2.182a10 10 0 013.8 0" />
                  <path d="M13.9 21.818a10 10 0 01-3.8 0" />
                  <path d="m16 9-5.5 5.5L8 12" />
                  <path d="M17.609 3.721a10 10 0 012.69 2.7" />
                  <path d="M2.182 13.9a10 10 0 010-3.8" />
                  <path d="M20.279 17.609a10 10 0 01-2.7 2.69" />
                  <path d="M21.818 10.1a10 10 0 010 3.8" />
                  <path d="M3.721 6.391a10 10 0 012.7-2.69" />
                  <path d="M6.391 20.279a10 10 0 01-2.69-2.7" />
                </svg>`;

      const svgEdit = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-pencil preview-icon"
                >
                  <path
                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                  />
                  <path d="m15 5 4 4" />
                </svg>`;

      const svgDelete = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash preview-icon"
                >
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M3 6h18" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>`;

      /* Criando Elementos */
      const liTask = document.createElement("li");

      const divTaskInfo = document.createElement("div");
      const inputTaskCheckbox = document.createElement("input");
      const pTaskName = document.createElement("p");

      const divShowRank = document.createElement("div");
      const imgRank = document.createElement("img");

      const divCompleteOrPendent = document.createElement("div");
      const divTaskStatus = document.createElement("div");
      divTaskStatus.insertAdjacentHTML("afterbegin", svgComplete);
      divTaskStatus.insertAdjacentHTML("afterbegin", svgPendent);
      const divTaskStatusInfo = document.createElement("div");
      const pCompleteOrPendent = document.createElement("p");
      const pCompleteDate = document.createElement("p");

      const divTaskActions = document.createElement("div");
      const buttonEdit = document.createElement("button");
      const buttonDelete = document.createElement("button");

      /* Adicionando classes nos elementos */
      liTask.classList.add("task");
      divTaskInfo.classList.add("task-info");
      inputTaskCheckbox.classList.add("task-checkbox");
      pTaskName.classList.add("task-name");
      divShowRank.classList.add("show-rank");
      divCompleteOrPendent.classList.add("complete-or-pendent");
      divTaskStatus.classList.add("task-status");
      divTaskStatusInfo.classList.add("task-status-info");
      divTaskActions.classList.add("task-actions");
      buttonEdit.classList.add("btn-edit");
      buttonDelete.classList.add("btn-delete");

      /* Adiciona addEventListener */
      inputTaskCheckbox.onclick = (e) => e.stopPropagation();

      // Deixando livre para você implementar depois:
      buttonEdit.onclick = (e) => {
        e.stopPropagation();
      };

      buttonDelete.onclick = (e) => {
        e.stopPropagation();
      };

      inputTaskCheckbox.onchange = (e) => {
        updateTaskState(e.target.checked);
      };

      liTask.onclick = (e) => {
        if (this.tasks[i].statusInfo.statusTask) return;
        const newState = !this.tasks[i].statusInfo.statusTask;
        updateTaskState(newState);
      };

      /* Deleta Task */
      buttonDelete.onclick = (e) => {
        e.stopPropagation();
        const taskId = liTask.dataset.id;
        this.deleteTask(taskId);
      };

      /* Adicionando informações nos elementos */
      liTask.dataset.id = this.tasks[i].id;

      pTaskName.textContent = this.tasks[i].name;

      pCompleteOrPendent.textContent = textCompleteOrPendent;
      if (isComplete) {
        liTask.classList.add("completed");
        inputTaskCheckbox.checked = true;
        pCompleteOrPendent.classList.add("text-green");
        pCompleteDate.textContent = this.tasks[i].statusInfo.completeDate;
        pCompleteDate.classList.add("text-muted");
      } else {
        pCompleteOrPendent.classList.add("text-muted");
      }

      /* Adicionando Atributos nos elementos */
      inputTaskCheckbox.type = "checkbox";
      inputTaskCheckbox.name = "task-complete";

      imgRank.src = this.tasks[i].rankInfo.asset;
      imgRank.alt = `Missão Rank ${this.tasks[i].rankInfo.name}`;

      buttonEdit.type = "button";
      buttonEdit.disabled = this.tasks[i].statusInfo.statusTask;

      buttonDelete.type = "button";
      buttonDelete.disabled = this.tasks[i].statusInfo.statusTask;

      buttonEdit.innerHTML = svgEdit;
      buttonDelete.innerHTML = svgDelete;

      /* Estruturando os elementos */
      liTask.append(divTaskInfo, divShowRank, divCompleteOrPendent);
      divTaskInfo.append(inputTaskCheckbox, pTaskName);
      divShowRank.appendChild(imgRank);
      divCompleteOrPendent.append(divTaskStatus, divTaskActions);

      divTaskStatus.appendChild(divTaskStatusInfo);
      divTaskStatusInfo.append(pCompleteOrPendent, pCompleteDate);

      divTaskActions.append(buttonEdit, buttonDelete);

      /* Adicionando task na lista */
      this.ulList.appendChild(liTask);
    }
    this.pMissionCount.textContent = this.tasks.length;
  }
}
