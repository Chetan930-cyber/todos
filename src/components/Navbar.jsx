import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/todoSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.todos.theme);

  return (
    <nav className={`p-4 transition-all duration-500 ease-in-out 
      ${theme === "light" ? "bg-indigo-400" : "bg-gray-800"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Todo App</h1>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-4 py-2 rounded-lg bg-white text-gray-800 font-semibold hover:bg-gray-200 transition shadow-md"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
