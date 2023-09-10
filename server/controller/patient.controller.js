const patientService = require("../service/patient.service");

async function registerPatient(req, res) {
    try {
        const patient = req.body;
        await patientService.registerPatient(patient);

        return res.status(200).json({
            error: false,
            payload: "Patient Successfully Registered"
        }) 

    } catch (error) {
        return res.status(500).json({
            error: true,
            payload: error
        })
    }
}

module.exports = {
    registerPatient
}