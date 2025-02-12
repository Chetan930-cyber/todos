// src/redux/todoSlice.jsx

import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [{ id: 1, text: "Something Here" }],
    theme: "light", // Default theme
    cryptoId: null, // Initial cryptoId as a number or null
    edit: { isEdit: false, todo: {} },
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    add: (state, action) => {
      state.allTodos = [action.payload, ...state.allTodos];
    },
    remove: (state, action) => {
      state.allTodos = state.allTodos.filter((item) => item.id !== action.payload);
    },
    setEdit: (state, action) => {
      state.edit = { todo: action.payload, isEdit: true };
    },
    update: (state, action) => {
      state.allTodos = state.allTodos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.edit = { todo: {}, isEdit: false };
    },
    setCryptoId: (state, action) => {
      state.cryptoId = Number(action.payload); // Convert payload to number
    },
  },
});

export const { toggleTheme, add, remove, setEdit, update, setCryptoId } = TodoSlice.actions;
export default TodoSlice.reducer;
