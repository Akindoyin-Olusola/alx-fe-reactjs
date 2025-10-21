import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

function sampleTodos() {
  return [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write tests", completed: true },
    { id: 3, text: "Ship app", completed: false },
  ];
}

export default function TodoList() {
  const [todos, setTodos] = useState(sampleTodos);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((t) => [newTodo, ...t]);
  };

  const toggleTodo = (id) => {
    setTodos((t) => t.map(td => td.id === id ? { ...td, completed: !td.completed } : td));
  };

  const deleteTodo = (id) => {
    setTodos((t) => t.filter(td => td.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul aria-label="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              role="button"
              tabIndex={0}
              onClick={() => toggleTodo(todo.id)}
              onKeyDown={(e) => { if (e.key === "Enter") toggleTodo(todo.id); }}
              style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
              aria-label={`todo-${todo.id}`}
              data-testid={`todo-text-${todo.id}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              aria-label={`delete-${todo.id}`}
              style={{ marginLeft: 8 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
