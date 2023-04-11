import React, { useState } from "react";
import axios from "axios";

const UpdateToDo = ({ _id, handleClose, handleUpdate }) => {
  const [data, setData] = useState({ title: "", description: "" });

  function handleChange(e) {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:8008/api/todo/${_id}`, data)
      .then((res) => {
        setData({ title: "", description: "" });
      })
      .catch((err) => {
        console.log("failed to update");
        console.log(err);
      });
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800">Update To-Do</h2>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          handleUpdate();
          handleClose();
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-800 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-800 font-medium mb-2"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Update To-Do
        </button>
      </form>
    </div>
  );
};

export default UpdateToDo;
