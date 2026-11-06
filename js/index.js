import { Task } from "./modules/task.js";
import { TaskInterface } from "./modules/taskInterface.js";

const rawData = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = rawData.map((item) => new Task(item));

new TaskInterface(taskList).build();
