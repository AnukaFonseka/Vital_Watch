const bcrypt = require("bcrypt");
const userService = require("../service/user.service");
const { sign } = require("jsonwebtoken");

async function registerUser(req, res) {
    try {
        const { username, password, firstName, lastName } = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await userService.createUser(username, hashPassword, firstName, lastName);
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

async function loginUser(req, res) {
    try {
        const { username, password } = req.body;

        const user = await userService.loginUser(username);

        if (!user) {
            return res.json({ error: "User Doesn't Exist" })
          }
        else {
            bcrypt.compare(password, user.password).then(async (match) => {
                if (!match) res.json({ error: "Wrong Username And Password Combination" });
                else{
                  const accessToken = sign(
                    { username: user.username, id: user.id },
                    "importantsecret"
                  );
                  res.json(accessToken);
                }  
              });
        }     
    } catch (error) {
        return res.status(500).json({
            error: true,
            payload: error
        })
    }
}


module.exports = {
    registerUser, 
    loginUser
}