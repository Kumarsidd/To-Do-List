import React from "react";

const ToDoCard = ({ data, handleEdit, handleDelete }) => {
  const { _id, title, description } = data;
  return (
    <li key={_id} className="px-4 py-4 sm:flex sm:justify-between">
      <div className="flex items-center">
        <div className="ml-3">
          <h2 className="text-lg font-medium text-gray-800">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-0">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mr-2"
          name={_id}
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
          name={_id}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoCard;
