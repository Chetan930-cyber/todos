import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/TodoSlice';


const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.todos.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav
      className={`p-4 ${
        theme === 'light'
          ? 'bg-gradient-to-r from-indigo-400 to-purple-500'
          : 'bg-gradient-to-r from-gray-800 to-black'
      } transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Todo App</h1>
        <button
          onClick={handleThemeToggle}
          className="px-4 py-2 rounded-lg bg-white text-gray-800 font-semibold hover:bg-gray-200 transition-all duration-300 ease-in-out shadow-md"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
