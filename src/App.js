// import dependences and styles
import React, { useState } from "react";
import "./App.scss";

// todo component
function Todo({ todo, index, completeTodo, removeTodo }) {
    // render each todo item
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        {/* button to mark todo as done */}
        <button onClick={() => completeTodo(index)} className="done-button">
          Done
        </button>
        {/* button to remove todo */}
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

// todo form component
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  // handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  // render the form for adding new todos
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

// main app component
function App() {
  // state for storing todos
  const [todos, setTodos] = useState([
    // initial todo items (see when you first open localhost)
    {
      text: "Explore Prospect Park",
      isCompleted: false
    },
    {
      text: "Make new stretch routine for morning stretches",
      isCompleted: false
    },
    {
      text: "Present solo project",
      isCompleted: false
    }
  ]);

  // function to add a new todo to the list
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  
  // function to mark a todo as completed
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  // function to remove a todo from the list
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // render the app component
  return (
    <div className="app">
        {/* Header */}
      <h1 className="header">To-Do</h1>
      {/* To-do List */}
      <div className="todo-list">
        {/* Render each to-do item */}
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        {/* To-do form to add new to-dos */}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

// export the app component as the default export
export default App;
