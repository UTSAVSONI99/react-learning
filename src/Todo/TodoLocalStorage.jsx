export function getTodoLocalStorage() {
  const savedTasks = localStorage.getItem("reactTodo");
  if (savedTasks) {
    return JSON.parse(savedTasks);
  }
  return [];
}

export function setTodoLocalStorage(tasks) {
  return localStorage.setItem("reactTodo", JSON.stringify(tasks));
}
