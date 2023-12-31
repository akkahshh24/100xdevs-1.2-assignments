const {Admin} = require("../db")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. 
    // Check readme for the exact headers to be expected
    const usernameReceived = req.headers.username;
    const passwordReceived = req.headers.password;

    // Does this username and password exist in the database
    Admin.findOne({
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

module.exports = adminMiddleware;