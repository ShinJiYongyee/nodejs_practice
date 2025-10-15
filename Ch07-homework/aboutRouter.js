const express = require('express');
const router = express.Router();

router.route("/")
.get((req, res) => {
    res.status(200).send('This is the About page');
});

module.exports = router;