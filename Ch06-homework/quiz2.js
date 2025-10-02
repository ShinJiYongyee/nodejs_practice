const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Welcome!`);
});

app.get('/about', (req, res) => {
    res.send(`This is the abput page!`);
});

app.get('/square/:num', (req, res) => {
    const number = req.params.num;
    res.send(`${number*number}`);
});

app.listen(3000, () => {
    console.log(`Server quiz2 running on http://localhost:3000`);
});