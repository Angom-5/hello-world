const express = require('express');
const router = express.Router();

router.get("/stockOutForm", (req, res) => {
    res.render("stock-outForm");
});

router.post('/stockOutForm', )





module.exports = router;