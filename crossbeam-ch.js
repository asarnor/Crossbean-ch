/*
Javascript Version
*/

let exampleTasks = [
  {
    task: "make a sandwich",
    depends: ["buy groceries"],
  },
  {
    task: "buy groceries",
    depends: ["go to the store"],
  },
  {
    task: "go to the store",
    depends: ["wake up"],
  },
  {
    task: "wake up",
    depends: ["sleep"],
  },
  {
    task: "sleep",
    depends: [],
  },
];

function DetermineOrder(tasks, selected) {
  // validate parameters
  if (
    !tasks ||
    !Array.isArray(tasks) ||
    tasks.length === 0 ||
    !selected ||
    !Array.isArray(selected) ||
    selected.length === 0
  ) {
    return false;
  }

  const obj = {};
  tasks.forEach((currentTask) => {
    if (currentTask.task && currentTask.depends.length) {
      obj[currentTask.task] = { depends: currentTask.depends[0] };
    } else {
      obj[currentTask.task] = { depends: null };
    }
  });

  const result = [];
  selected.forEach((selectedTask) => {
    let curr = selectedTask;
    while (curr !== null) {
      if (result.includes(curr)) {
        return;
      }
      result.unshift(curr);
      curr = obj[curr].depends;
    }
  });
  console.log(result);
  return result;
}

DetermineOrder(exampleTasks, ["make a sandwich"]);
