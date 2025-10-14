const express = require('express');
const router = express.Router();

router.route("/")
.get((req, res) => {
    console.log(`get`);
    res.status(200).send("Contacts Page");
})
.post((req, res) => {
    console.log(`post`);
    console.log(req.body);
    const { name, email, phone } = req.body;
    if(!name || !email || !phone) {
        return res.status(400).send("필수값 부재");
    }
    res.status(201).send("Create Page");
});

router.route("/contacts/:id")
.get((req, res) => {
    console.log(`get id : ${req.params.id}`);
    res.status(200).send(`get id : ${req.params.id}`);
})
.post((req, res) => {
    console.log(`post id : ${req.params.id}`);
    res.status(200).send(`post id : ${req.params.id}`);
})
.put((req, res) => {
    console.log(`put id : ${req.params.id}`);
    res.status(200).send(`put id : ${req.params.id}`);
})
.delete((req, res) => {
    console.log(`delete id : ${req.params.id}`);
    res.status(200).send(`delete id : ${req.params.id}`);
});

module.exports = router;