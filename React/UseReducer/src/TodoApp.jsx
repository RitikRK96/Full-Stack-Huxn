import React, { useReducer, useState } from "react";
import "./App.css";

const initialState = [];

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case "delete":
            return state.filter((todo) => todo.id !== action.payload);
        case "toggle":
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const handleAdd = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch({ type: "add", payload: input });
            setInput("");
        }
    };

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <div className="todo-container glass">
                <h1>To-Do List</h1>
                <button className="toggle-btn" onClick={() => setDarkMode((prev) => !prev)}>
                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
                <form className="todo-form" onSubmit={handleAdd}>
                    <input
                        type="text"
                        value={input}
                        placeholder="Enter a task"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>

                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li className="todo-item glass" key={todo.id}>
                            <span
                                className={`todo-text ${todo.completed ? "completed" : ""}`}
                                onClick={() => dispatch({ type: "toggle", payload: todo.id })}
                            >
                                {todo.text}
                            </span>
                            <button
                                className="todo-delete"
                                onClick={() => dispatch({ type: "delete", payload: todo.id })}
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
