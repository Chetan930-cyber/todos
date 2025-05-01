import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../redux/todoSlice";

const ColorfulForm = () => {
  const { edit } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ text: "" });

  useEffect(() => {
    setFormData({ text: edit.isEdit ? edit.todo.text : "" }); // isse edit button click krne pr automatically wo text input me dikh jaye
  }, [edit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    edit.isEdit
      ? dispatch(update({ id: edit.todo.id, text: formData.text }))
      : dispatch(add({ id: crypto.randomUUID(), text: formData.text }));
    setFormData({ text: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white mt-3 p-6 rounded-lg shadow-lg w-full">
      <h2 className="text-3xl text-center text-gray-800 mb-4">Colorful Form</h2>

      {/* Input Field */}
      <input
        type="text"
        name="text"
        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition duration-300"
        placeholder="Type something..."
        onChange={handleChange}
        value={formData.text}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 mt-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:from-yellow-500 hover:to-pink-600 transition duration-300"
      >
        {edit.isEdit ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default ColorfulForm;
