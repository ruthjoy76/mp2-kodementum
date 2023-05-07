import "./Todo.css";
import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleInputChange = (event) => setInputValue(event.target.value);

  const handleTodoDelete = (id) => {
    setTodos ((todos) => todos.filter((elem, index) => index !==id));
  };

  return (
    <div className="todos">
      <h1 className="question">What is you main goal for today?</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, id) => (
          <li key={id}>
            {todo}
            <button onClick={() => handleTodoDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;