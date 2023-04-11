const ToDo = require("../models/toDoSchema.js");

exports.getAllTodo = (req, res) => {
  ToDo.find()
    .then((todo) => res.status(201).json(todo))
    .catch((err) =>
      res.status(404).json({ message: "Todo not found", error: err.message })
    );
};

exports.postCreateToDo = (req, res) => {
  ToDo.create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "can't create a todo", error: err.message })
    );
};

exports.updateToDo = (req, res) => {
  ToDo.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.status(201).json({ message: "to do updated", data }))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "to do failed to update", error: err.message })
    );
};

exports.deletedToDo = (req, res) => {
  ToDo.findByIdAndDelete(req.params.id, req.body)
    .then((data) => res.status(201).json({ message: "to do deleted", data }))
    .catch((err) =>
      res
        .status(404)
        .json({ message: "to do failed to delete", error: err.message })
    );
};
