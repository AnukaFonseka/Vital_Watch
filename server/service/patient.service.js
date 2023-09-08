const { Patients } = require("../models/patients");

async function createPatient(patient) {
    try {
        const newPatient =  Patients.create({
            hospital_id: patient.hospital_id,
            firstName: patient.firstName,
            lastName: patient.lastName,
            date_Of_Birth: patient.date_Of_Birth,
            contactNo: patient.contactNo,
            address: patient.address,
            nic: patient.nic,
            email: patient.email,
            guardianName: patient.guardianName,
            guardian_contactNo: patient.guardian_contactNo,
            guardianAddress: patient.guardianAddress
          });


        return newPatient;

    } catch (error) {
        console.error('Error Creating Patient Service : ',error);
        throw error;
    }
}

module.exports = {
    createPatient
}