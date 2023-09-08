const { Users } = require("../models");

async function createUser(firstName, lastName,email, contactNo,username, hashPassword,role ) {
    try {
        const newUser =  Users.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            contactNo: contactNo,
            username: username,
            password: hashPassword,
            role: role,
           
          });

          return newUser;

    } catch (error) {
        console.error('Error Creating User Service : ',error);
        throw error;
    }
}

module.exports = {
    createUser
}