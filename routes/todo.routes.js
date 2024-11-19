// const { default: Protected } = require("../../frontend/src/share/Protected")
const { addTodo, getTodo, deleteTodo, updateTodo } = require("../controllers/todo.controler")
const { userProtected } = require("../middleware/auth.middleware")


const router = require("express").Router()

router
    .post("/create" , userProtected ,addTodo)
    .get("/fetch", userProtected ,getTodo)
    .put("/update", userProtected ,updateTodo)
    .delete("/delete", userProtected ,deleteTodo)

    module.exports = router