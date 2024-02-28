import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  return (
    <div className='App'>
      <h1>To-Do App</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>

      <form onSubmit={addTodo}>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;
