import { useState } from "react";
const ToDoPractise = () => {
  const [todo, setTodo] = useState([])
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <div className="todolist-Container">
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <input type="text" value={inputValue} placeholder="Add a new todo..." />
          <button type="submit" className="todolistButton">Add toDo List</button>
        </form>

        <ul>
          {todo.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default ToDoPractise