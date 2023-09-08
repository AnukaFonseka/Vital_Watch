const express = require("express");

const userRoutes = require("./user.route");
const patientRoute = require("./patient.route");

function routes() {
    const router = express.Router();
    
    router.use("/user", userRoutes);
    router.use("/patient", patientRoute)

    return router
}

module.exports = routes();