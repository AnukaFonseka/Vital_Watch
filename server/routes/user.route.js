const express = require("express");
const userController = require("../controller/user.controller")
const authMiddleware = require("../middleware/AuthMiddleware");

function getUserRoutes(){
    const router = express.Router();

    router.use(express.json());
    router.use(authMiddleware);

    router.post("/registerUser", userController.registerUser)
    router.post("/login")

    return router
}

module.exports = getUserRoutes();