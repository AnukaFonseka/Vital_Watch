const express = require("express");

const userRoutes = require("./user.route");
const patientRoutes = require("./patients.routes");

function routes() {

    const router = express.Router();
    
    router.use("/user", userRoutes);
    router.use("/patient", patientRoutes);

    return router
}

module.exports = routes();