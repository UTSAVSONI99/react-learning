import React from "react";
import "./Todo.css";
import { useState } from "react";
import { MdCheck, MdDelete } from "react-icons/md";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    if (tasks.includes(inputValue)) {
      alert("Item already exists");
      setInputValue("");
      return;
    }
    setTasks((prevTasks) => [...prevTasks, inputValue]);
    setInputValue("");
  };

  return (
    <section className="todo-container">
      <header>
        <h1>To-Do List</h1>
      </header>
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

      <section className="myUnOrdList">
        <ul>
          {tasks.map((task, index) => {
            return (
              <li key={index} className="todo-item">
                <span> {task}</span>
                <button>
                  <MdCheck />
                </button>
                <button>
                  <MdDelete />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
