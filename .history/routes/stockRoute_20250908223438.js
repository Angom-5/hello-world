const express = require("express");
const router = express.Router();

const stockoutModel = require("../models/stockoutModel");

router.get("/stockoutForm", (req, res) => {
  res.render("stockoutForm");
});

//this is synchr
router.post("/stockOutForm", (req, res) => {
    const stockout = new stockoutModel(req.body); //it is keeping all the data coming from the form
    console.log(req.body);
    stockout.save(); //this gives space for the data to be received so it doesn't fail
});


router.post("/stockOutForm", async (req, res) => {
  //async makes the function asynchronous
  try {
    const stockout = new stockoutModel(req.body); //it is keeping all the data coming from the form
    console.log(req.body);
    await stockout.save(); //this gives space for the data to be received so it doesn't fail
  } catch (error) {
    console.error(error);
    res.redirect('/stockoutForm');
  }
});

// router.get("/login", (req, res) => {
//   res.render("login");
// });

// router.post("/login", (req, res) => {
//   console.log(req.body);
// });

module.exports = router;
