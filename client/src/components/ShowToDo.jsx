import React, { useState, useEffect } from "react";
import axios from "axios";
import ToDoCard from "./ToDoCard";
import { Link } from "react-router-dom";
import UpdateToDo from "./UpdateToDo";

const ShowToDo = () => {
  const [todo, setTodo] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8008/api/todo")
      .then((res) => setTodo(res.data))
      .catch((err) => {
        console.log("failed to show");
        console.log(err);
      });
  }, [update]);

  function handleEdit(e) {
    setId(e.target.name);
    setOpen(true);
  }

  function handleUpdate() {
    console.log("update:", update, !update);
    setUpdate(!update);
  }

  function handleDelete(e) {
    axios.delete(`http://localhost:8000/api/todo/${e.target.name}`);

    setTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  }

  function handleClose() {
    setId("");
    setOpen(false);
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-4 shadow-sm">
        <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">To-Do List</h1>
          <Link to="/create-todo">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg">
              New
            </button>
          </Link>
        </div>
      </header>
      <main className="max-w-screen-lg mx-auto px-4 py-8">
        <ul className="bg-white shadow-md rounded-lg overflow-hidden divide-y divide-gray-200">
          {todo.map((data) => (
            <ToDoCard
              key={data._id}
              data={data}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </main>
      {open ? (
        <section className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white max-w-md mx-auto p-6 rounded-lg shadow-md">
            <p
              onClick={handleClose}
              className="text-gray-600 text-right cursor-pointer"
            >
              &times;
            </p>
            <UpdateToDo
              _id={id}
              handleClose={handleClose}
              handleUpdate={handleUpdate}
            />
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShowToDo;
