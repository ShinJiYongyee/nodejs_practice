const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.send(`Hello!`);
});

app.get('/users/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

app.listen(3000, () => {
    console.log(`Server quiz1 running on http://localhost:3000`);
});