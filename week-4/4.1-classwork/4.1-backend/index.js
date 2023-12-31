const express = require('express');

const app = express();
const port = 3000;

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b;
    res.send(sum.toString());
});

app.get("/interest", (req, res) => {
    const p = parseInt(req.query.principal);
    const r = parseInt(req.query.interest);
    const t = parseInt(req.query.time);
    
    const interest = (p * r * t) / 100;
    const total = principal + interest;

    res.send({
        interest,
        total,
    });
});

app.listen(3000, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});