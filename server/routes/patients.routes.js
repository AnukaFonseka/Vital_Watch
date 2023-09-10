const express = require("express");
const patientController = require("../controller/patient.controller")

function getPatientRoutes(){
    const router = express.Router();

    router.use(express.json());

    router.post("/registerPatient", patientController.registerPatient);

    return router;
}

module.exports =  getPatientRoutes();



