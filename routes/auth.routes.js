const { register, login, logout } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/create",register)
    .get("/signin",login)
    .put("/signout",logout)

module.exports = router