/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdCheck, MdDelete } from "react-icons/md";

export default function TodoList({ data, handleDeleteTodo }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <li className={`todo-item ${isCompleted ? "completed" : ""}`}>
      <span>{data}</span>
      <button
        className="check-btn"
        onClick={() => setIsCompleted(!isCompleted)}
      >
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => handleDeleteTodo(data)}>
        <MdDelete />
      </button>
    </li>
  );
}
