import "./Todo.css";

import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList"; // Import TodoList component
import TodoDate from "./TodoDate";
import { getTodoLocalStorage, setTodoLocalStorage } from "./TodoLocalStorage";

export default function Todo() {
  const [tasks, setTasks] = useState(() => getTodoLocalStorage());

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (tasks.includes(inputValue)) {
      alert("Item already exists");
      return;
    }
    setTasks((prevTasks) => [...prevTasks, inputValue]);
  };

  // add items to local storage
  setTodoLocalStorage(tasks);

  const handleDeleteTodo = (value) => {
    const updatedTasks = tasks.filter((task) => task !== value);
    setTasks(updatedTasks);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>To-Do List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {tasks.map((item, index) => {
            return (
              <TodoList
                key={index}
                data={item}
                handleDeleteTodo={handleDeleteTodo}
              />
            );
          })}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={() => setTasks([])}>
          Clear All
        </button>
      </section>
    </section>
  );
}
