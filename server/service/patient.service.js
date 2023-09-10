const { Patients } = require("../models");

async function registerPatient(hospitalId, firstName, lastName) {

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