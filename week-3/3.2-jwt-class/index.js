const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const port = 3000;

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "akkahshh@gmail.com",
        password: "abc",
        name: "akkahshh",
    },
    {
        username: "aakash@gmail.com",
        password: "123",
        name: "aakash",
    },
];

function userExists(username, password) {
    const user = ALL_USERS.find(user => user.username === username && user.password === password);
    return !!user;
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User with given credentials does not exist"
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        return res.status(200).json({
            users: ALL_USERS.filter( (user) => {
                if (user.username === username) {
                    return false;
                }
                return true
            })
        });
        
    } catch (error) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})