import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [{ id: "1", text: "Sample Task" }],
    theme: "light",
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
      state.edit = { isEdit: true, todo: action.payload };
    },
    update: (state, action) => {
      state.allTodos = state.allTodos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.edit = { isEdit: false, todo: {} };
    },
  },
});

export const { toggleTheme, add, remove, setEdit, update } = todoSlice.actions;
export default todoSlice.reducer;
