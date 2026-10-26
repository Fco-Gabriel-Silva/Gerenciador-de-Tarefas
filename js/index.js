import { Task } from "./modules/task.js";
import { TaskInterface } from "./modules/taskInterface.js";
import { pickRankAsset } from "./utils/pick-rank-asset.js";

const taskList = [];

const task1 = new Task("Teste1", "A");
const task2 = new Task("Teste2", "B");

taskList.push(task1, task2);
new TaskInterface(taskList).build();
