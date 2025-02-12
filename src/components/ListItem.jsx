// ListItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { edit, remove } from './features/todos/TodoSlice';

const ListItem = ({todo}) => {

  const dispatch = useDispatch();

const removeTodo = (id) => {

dispatch(remove(id));
};

const editTodo = () =>{
dispatch(edit(todo));
};

  return (
    <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:bg-blue-100">
      <div>
        <h1 className="text-md font-serif text-gray-800">{todo.id}</h1>
        <p className="text-xl font-sans text-black-600 font-extrabold">{todo.text}</p>
      </div>
      <div className="flex space-x-2">
        <button
           onClick={()=> editTodo(todo)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Edit
        </button>
        <button
        onClick={()=> removeTodo(todo.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;
