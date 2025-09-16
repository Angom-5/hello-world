const express = require('express');
const router = express.Router();

const stockoutModel=require('')

router.get("/stockOutForm", (req, res) => {
    res.render("stock-outForm");
});

router.post('/stockOutForm', (req, res) => {
  console.log(req.body);
});

// router.get("/login", (req, res) => {
//   res.render("login");
// });

// router.post("/login", (req, res) => {
//   console.log(req.body);
// });





module.exports = router;