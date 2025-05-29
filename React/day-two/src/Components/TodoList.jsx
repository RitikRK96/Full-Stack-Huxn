import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="todolist-Container">
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit} >
          <input type="text" value={inputValue} placeholder="Add a new Todo..." onChange={handleChange}/>
          <button type="submit" className="todolistButton">
            Add Todo List
          </button>
        </form>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
