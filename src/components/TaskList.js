import React from "react";
import Task from "./Task"

function TaskList({tasks, selected="All", handleDelete}) {

  const tasksToDisplay = tasks.filter(taskObj => {
    if (selected === "All") return true

    return taskObj.category === selected
  })

  const taskLis = tasksToDisplay.map(taskObj => <Task text={taskObj.text} category={taskObj.category} handleDelete={() => handleDelete(taskObj)} key={taskObj.text} />)

  return (
    <div className="tasks">
      {taskLis}
    </div>
  );
}

export default TaskList;
