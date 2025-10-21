import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="add-todo-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo"
        aria-label="new-todo-input"
      />
      <button type="submit" aria-label="add-todo-button">Add</button>
    </form>
  );
}
