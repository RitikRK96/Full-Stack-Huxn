import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const deleteTodo = (indexToDelete) => {
    const newTodos = [...todo];
    newTodos.splice(indexToDelete, 1);
    setTodo(newTodos);
  };


  const clearAll = () => {
    setTodo([])
  }


  return (
    <>
      <div className="todo-container">
        <h1>To-Do App</h1>
        <input
          type="text"
          placeholder="add todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button type="submit" onClick={handleSubmit}>Add</button>
        <div className="todo-output">
          {todo.map((todos, index) => (
            <ul key={index}>
              <li >
                {todos}
                <button onClick={() => deleteTodo(index)}>❌</button>
              </li>
            </ul>
          ))}

        </div> <br />
        <button onClick={clearAll}>Clear All</button>
      </div>
    </>
  );
}

export default App;
