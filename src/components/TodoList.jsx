import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEdit, remove } from "../redux/todoSlice";

const TodoList = () => {
  const { allTodos, edit } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white p-6">
      <ul className="w-full bg-gradient-to-r from-blue-400 via-white to-blue-400 p-6 rounded-lg shadow-lg space-y-4">
        {allTodos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-4 rounded-lg shadow-md transition duration-300 
              ${edit.isEdit && edit.todo.id === todo.id ? "bg-yellow-300" : "bg-white"}`}
          >
            <span className="text-lg font-bold text-gray-800">{todo.text}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => dispatch(setEdit(todo))}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(remove(todo.id))}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
