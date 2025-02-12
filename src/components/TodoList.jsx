// src/components/TodoList.jsx

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, setEdit, update } from "../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.allTodos);
  const editState = useSelector((state) => state.todos.edit);

  const [text, setText] = useState("");

  const handleAdd = () => {
    if (editState.isEdit) {
      dispatch(update({ id: editState.todo.id, text }));
    } else {
      dispatch(add({ id: Date.now(), text }));
    }
    setText("");
  };

  return (
    <div className="p-4">
      <div className="flex mb-4">
        <input
          type="text"
          className="border rounded px-3 py-2 mr-2 w-full"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {editState.isEdit ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{todo.text}</span>
            <div>
              <button
                onClick={() => dispatch(setEdit(todo))}
                className="bg-yellow-400 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-500 transition"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(remove(todo.id))}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
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
