const express = require('express');
const router = express.Router();

const stockoutModel = require('../models/stockoutModel');

router.get("/stockOutForm", (req, res) => {
    res.render("stock-outForm");
});

router.post('/stockOutForm', async (req, res) => {  //async makes the function asynchronous
 try {
  
 } catch (error) {
  
 }
});

// router.get("/login", (req, res) => {
//   res.render("login");
// });

// router.post("/login", (req, res) => {
//   console.log(req.body);
// });





module.exports = router;