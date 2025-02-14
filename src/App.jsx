import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import ColorfulForm from "./components/ColorfulForm";
import TodoList from "./components/TodoList";

const App = () => {
  const theme = useSelector((state) => state.todos.theme);

  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-white" : "bg-gray-900"} transition-colors`}>
      <Navbar />
      <main className="p-6">
        <h2 className="text-3xl font-bold text-indigo-500 transition duration-300">Welcome to Todo App</h2>
        <ColorfulForm />
        <TodoList />
      </main>
    </div>
  );
};

export default App;
