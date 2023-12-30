const {User} = require("../db")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. 
    // Check readme for the exact headers to be expected
    const usernameReceived = req.headers.username;
    const passwordReceived = req.headers.password;

    // Does this username and password exist in the database
    User.findOne({
        username: usernameReceived,
        password: passwordReceived
    })
    .then(function(value) {
        if (value) {
            // Successful authentication
            next();
        } else {
            // Failed authentication
            res.status(401).json({
                status: "error",
                message: "Invalid username or password."
            });
        }
    })
}

module.exports = userMiddleware;