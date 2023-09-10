const { Patients } = require("../models");

async function registerPatient(patient) {

    try {
        const newPatient = Patients.create(patient);
        return newPatient;
    } catch (error) {
        console.error('Error Creating User Service : ',error);
        throw error;
    }
    
}

module.exports = {
    registerPatient
}