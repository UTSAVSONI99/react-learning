import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" className="button">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
}
