const { Users } = require("../models");

async function createUser(username, hashPassword, firstName, lastName) {
    try {
        const newUser =  Users.create({
            username: username,
            password: hashPassword,
            firstName: firstName,
            lastName: lastName,
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