const router = require("express").Router();

const {
    getAllTodo, postCreateToDo, updateToDo, deletedToDo
} = require("../controller/toDoController.js")

router.get("/", getAllTodo);

router.post("/", postCreateToDo);

router.put("/:id", updateToDo);

router.delete("/:id", deletedToDo);

module.exports = router;
