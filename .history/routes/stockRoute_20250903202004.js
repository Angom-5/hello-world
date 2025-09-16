const express = require('express');
const router = express.Router();

router.get("/stockOutForm", (req, res) => {
    res.render("stock-outFo")
});







module.exports = router;