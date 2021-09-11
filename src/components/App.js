import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setList] = useState(TASKS)
  const [selected, setSelected] = useState("All")

  function handleDelete(deletedTask){
    setList(taskList.filter(taskObj=> taskObj!==deletedTask))
  }

  function onTaskFormSubmit(newTaskObj){
    setList([...taskList, newTaskObj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selected={selected} 
        setSelected={setSelected} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
        tasks={taskList} 
        selected={selected} 
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
