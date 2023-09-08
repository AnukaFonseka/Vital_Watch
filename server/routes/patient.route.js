const express = require("express");
const patientController = require("../controller/patient.controller")
const authMiddleware = require("../middleware/AuthMiddleware");

function getPatientRoutes(){
    const router = express.Router();

    router.use(express.json());
    // router.use(authMiddleware);

    router.post("/registerPatient", patientController.registerPatient);
    

    return router;
}

module.exports = getPatientRoutes();