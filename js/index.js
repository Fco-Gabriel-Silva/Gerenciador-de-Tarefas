import { Task } from "./modules/task.js";
import { TaskInterface } from "./modules/taskInterface.js";

const task1 = new Task("Teste", "A");
new TaskInterface(task1).build();
