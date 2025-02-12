// BlueWhiteList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';


const BlueWhiteList = () => {
const{allTodos} = useSelector((state)=>state.todos);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white ">
      <ul className="w-full bg-gradient-to-r from-blue-400 via-white to-blue-400 p-6 rounded-lg shadow-lg space-y-4">
     {allTodos.map((todo)=>(
      <ListItem key={todo.id} todo={todo}  />
     ))}
      </ul>
    </div>
  );
};

export default BlueWhiteList;
