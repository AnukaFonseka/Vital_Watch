const express = require("express");
const userController = require("../controller/user.controller")
const authMiddleware = require("../middleware/auth.middleware");

function getUserRoutes(){
    const router = express.Router();

    router.use(express.json());
    // router.use(authMiddleware);

    router.post("/registerUser", userController.registerUser)
    router.post("/login", userController.loginUser)

    return router;
}

module.exports = getUserRoutes();