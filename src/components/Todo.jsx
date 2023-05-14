import "./Todo.css";
import React, { useState, useEffect } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    alert("Todo deleted!");
  };

  return (
    <div className="todos">
       <h1 className="question">What is you  goal for today?</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => handleDelete(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
