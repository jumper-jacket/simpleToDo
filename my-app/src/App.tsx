import React from 'react';
import ToDoList from './components/ToDoList';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-neutral-800 to-black  flex flex-col justify-center ">
        <Header />
        <ToDoList />
    </div>
  );
}

export default App;
