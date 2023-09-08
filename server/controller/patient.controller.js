//const bcrypt = require("bcrypt");
const patientService = require("../service/patient.service")

async function registerPatient(req, res) {
    try {
        // const {hospital_id,firstName, lastName,date_Of_Birth,contactNo,address,nic, email, guardianName,guardian_contactNo, guardianAddress } = req.body;
        //const hashPassword = await bcrypt.hash(password, 10);
        // const patient =  userService.createUser(hospital_id,firstName, lastName,date_Of_Birth,contactNo,address,nic, email, guardianName,guardian_contactNo, guardianAddress);

        const patient = req.body;

        await patientService.createPatient(patient);

        return res.status(200).json({
            error: false,
            payload: "Patient Successfully Created"
        })

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: true,
            payload: error 
        })
    }
}

module.exports = {
    registerPatient
}