const express = require("express");
const router = express.Router();

const stockoutModel = require("../models/stockoutModel");

router.get("/stockOutForm", (req, res) => {
  res.render("stockoutForm");
});

//this is synchronous
// router.post("/stockOutForm", (req, res) => {
//     const stockout = new stockoutModel(req.body); //it is keeping all the data coming from the form
//     console.log(req.body);
//     stockout.save(); //this gives space for the data to be received so it doesn't fail
// });


//this is asynchronous
router.post("/stockOutForm", async (req, res) => {
  //async makes the function asynchronous
  try {
    const stockout = new stockoutModel(req.body); //it is keeping all the data coming from the form
    console.log(req.body);
    await stockout.save(); //this gives space for the data to be received so it doesn't fail
    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.redirect('/stockoutForm');
  }
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

//stocklist route(getting stock from the database)
router.post("/stockOutForm", async (req, res) => {  //the stockoutList is just a name
  try {
    let items = await stockoutModel.find().sort({ $natural: -1 });
    console.log(items);
    res.render("stockouttable", { items });
  } catch (error) {
    res.status(400).send("Unable to find data in the database!")
  }
});

// router.get("/login", (req, res) => {
//   res.render("login");
// });

// router.post("/login", (req, res) => {
//   console.log(req.body);
// });


//editing 





module.exports = router;
