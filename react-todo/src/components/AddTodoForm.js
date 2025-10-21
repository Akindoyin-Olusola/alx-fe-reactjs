import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="new-todo-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button aria-label="add-todo-button" type="submit">
        Add
      </button>
    </form>
  );
}
