import React, { useState } from "react";

export const TodoForm = ({ addTodo, existingTodos }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  const trimmedValue = value.trim();
  
  if (trimmedValue && !existingTodos.includes(trimmedValue)) {
    addTodo(trimmedValue);
  } else {
    alert("Duplicate task! Task already exists in the todo list.");
  }

  setValue("");
};

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
