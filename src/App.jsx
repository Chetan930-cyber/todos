// src/App.jsx

import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

const App = () => {
  const theme = useSelector((state) => state.todos.theme);

  return (
    <div
      className={`min-h-screen ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      } transition-colors duration-500 ease-in-out`}
    >
      <Navbar />
      <main className="p-6">
        <h2 className="text-3xl font-bold hover:text-indigo-500 transition duration-300 ease-in-out">
          Welcome to the Todo App
        </h2>
        <TodoList />
      </main>
    </div>
  );
};

export default App;
