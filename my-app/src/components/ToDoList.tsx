import React, { useState } from 'react';

function ToDoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-200 rounded-lg shadow-xl">
    <div className="flex justify-center">
      <h1 className="text-2xl font-bold mb-4">Todo</h1>
    </div>
      <div className="flex mb-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="Add a new todo"
        />
        <button
          onClick={addTodo}
          className="bg-blue-400 text-white p-2 rounded-r hover:bg-blue-800"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="p-2 bg-gray-100 mb-2 rounded">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;