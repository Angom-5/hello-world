//will have that for login, sign-up
const express = require("express");
const router = express.Router();

const UserModel = require("../models/userModel");
//the .. means that the thing should get out of the authRoutes folder and instead enter the userModel file

//getting the sign-up file
router.get("/signup", (req, res) => {
  //when using a template engine use render..it replaces a sendFile
  res.render("signup", { title: "Sign-Up page" }); //this is the pug file with your html(obviously)
}); //you can add the title of the tab by {title:"..."}

router.post("/signup", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    let existingUser = await UserModel.findOne({ email: req.body.email });
    if existingUser) 
    console.log(req.body);
    user.save();
    res.redirect("/login"); //you specify the route path you want it to go into
  } catch (error) {}
});
//collects whatever is written in the form

//login route
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  console.log(req.body);
});

//stocklist route

module.exports = router;
