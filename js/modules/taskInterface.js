export class TaskInterface {
  tasks;
  ulList;

  constructor(tasks) {
    this.tasks = [...tasks];
    this.ulList = document.querySelector(".task-list .list");
  }

  build() {
    for (let i = 0; i < this.tasks.length; i++) {
      /* Criando variaveis */
      const isCompleteOrPendent = this.tasks[i].statusInfo.statusTask
        ? "Concluída!"
        : "Pendente.";

      const hasCompleteDate = this.tasks[i].statusInfo.completeDate;

      /* Criando Elementos */
      const liTask = document.createElement("li");

      const divTaskInfo = document.createElement("div");
      const inputTaskCheckbox = document.createElement("input");
      const pTaskName = document.createElement("p");

      const divShowRank = document.createElement("div");
      const imgRank = document.createElement("img");

      const divCompleteOrPendent = document.createElement("div");
      const divTaskStatus = document.createElement("div");
      const svgCompleteOrPendent = this.tasks[i].statusInfo.statusTask
        ? `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2ced91"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-check-big preview-icon"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>`
        : `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-dashed-check preview-icon"
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
      const divTaskStatusInfo = document.createElement("div");
      const pCompleteOrPendent = document.createElement("p");
      const pCompleteDate = document.createElement("p");
      const buttonDropdownConfig = document.createElement("button");
      const svgDropdownConfig = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-ellipsis-vertical preview-icon"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>`;

      /* Adicionando classes nos elementos */
      liTask.classList.add("task");
      divTaskInfo.classList.add("task-info");
      inputTaskCheckbox.classList.add("task-checkbox");
      pTaskName.classList.add("task-name");
      divShowRank.classList.add("show-rank");
      divCompleteOrPendent.classList.add("complete-or-pendent");
      divTaskStatus.classList.add("task-status");
      divTaskStatusInfo.classList.add("task-status-info");
      buttonDropdownConfig.classList.add("dropdown-config");

      /* Adicionando informações nos elementos */

      pTaskName.textContent = this.tasks[i].name;

      pCompleteOrPendent.textContent = isCompleteOrPendent;
      if (this.tasks[i].statusInfo.statusTask) {
        liTask.classList.add("completed");

        pCompleteOrPendent.classList.add("text-green");

        pCompleteDate.textContent = this.tasks[i].statusInfo.completeDate;
        pCompleteDate.classList.add("text-muted");
      } else {
        pCompleteOrPendent.classList.add("text-muted");
      }

      /* Adicionando Atributos nos elementos */

      inputTaskCheckbox.setAttribute("type", "checkbox");
      inputTaskCheckbox.setAttribute("name", "task-complete");

      imgRank.setAttribute("src", this.tasks[i].rankInfo.asset);
      imgRank.setAttribute("alt", `Missão Rank ${this.tasks[i].rankInfo.name}`);

      buttonDropdownConfig.setAttribute("type", "button");

      /* Estruturando os elementos */

      liTask.append(divTaskInfo, divShowRank, divCompleteOrPendent);
      divTaskInfo.append(inputTaskCheckbox, pTaskName);
      divShowRank.appendChild(imgRank);
      divCompleteOrPendent.append(divTaskStatus, buttonDropdownConfig);

      divTaskStatus.insertAdjacentHTML("afterbegin", svgCompleteOrPendent);
      divTaskStatus.appendChild(divTaskStatusInfo);
      divTaskStatusInfo.append(pCompleteOrPendent, pCompleteDate);

      buttonDropdownConfig.innerHTML = svgDropdownConfig;

      /* Adicionando task na lista */

      this.ulList.appendChild(liTask);
    }
  }
}
