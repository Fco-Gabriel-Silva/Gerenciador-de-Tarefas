import { Task } from "./modules/task.js";
import { TaskInterface } from "./modules/taskInterface.js";
import { pickRankAsset } from "./utils/pick-rank-asset.js";

const taskList = [
  {
    name: "50 Flexões de Condicionamento",
    rankInfo: {
      name: "C",
      asset: pickRankAsset("C"),
    },
    statusInfo: {
      statusTask: true,
      completeDate: new Date().toLocaleDateString("pt-br"),
    },
    updatedAt: null,
    deletedAt: null,
  },
  {
    name: "20 Flexões de Condicionamento",
    rankInfo: {
      name: "B",
      asset: pickRankAsset("B"),
    },
    statusInfo: {
      statusTask: false,
      completeDate: null,
    },
    updatedAt: null,
    deletedAt: null,
  },
];

const task1 = new Task("Teste", "A");
new TaskInterface(taskList).build();
