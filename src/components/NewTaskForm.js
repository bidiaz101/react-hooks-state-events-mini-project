import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newText, setText] = useState("")
  const [newCategory, setCategory] = useState("Code")

  const catOps = categories.filter(category => category !== "All").map(category => <option key={category}>{category}</option>)

  function handleSubmit(e){
    e.preventDefault()
    const newTask = {
      text: newText,
      category: newCategory
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={e => handleSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={e=>setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={e=>setCategory(e.target.value)}>
          {catOps}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
