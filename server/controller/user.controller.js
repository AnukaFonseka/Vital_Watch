const bcrypt = require("bcrypt");
const userService = require("../service/user.service");

async function registerUser(req, res) {
    try {
        const {firstName, lastName,email,contactNo, username, password, role } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await userService.createUser(firstName, lastName,email,contactNo,username, hashPassword, role);
        return res.status(200).json({
            error: false,
            payload: "User Successfully Created"
        })

    } catch (error) {
        return res.status(500).json({
            error: true,
            payload: error
        })
    }
}

module.exports = {
    registerUser
}