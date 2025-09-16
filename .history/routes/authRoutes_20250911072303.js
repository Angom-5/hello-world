//will have that for login, sign-up
const express = require("express");
const router = express.Router();

const UserModel = require("../models/userModel");
const passport = require("passport");
//the .. means that the thing should get out of the authRoutes folder and instead enter the userModel file

//getting the sign-up file
router.get("/signup", (req, res) => {
  //when using a template engine use render..it replaces a sendFile
  res.render("signup", { title: "Sign-Up page" }); //this is the pug file with your html(obviously)
}); //you can add the title of the tab by {title:"..."}

router.post("/signup", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    console.log(req.body);
    let existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).send("Already registered email!");
    } else {
      await UserModel.register(user, req.body.password, (error) => {
        if (error) {
          throw error;
        }
        res.redirect("/login"); //you specify the route path you want it to go into
      });
    };
  
    user.save();
  } catch (error) {
    res.status(400).send("Sorry something went wrong!")
  }
});
//collects whatever is written in the form

//login route
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", passport.aunthenticate("local", {fai})(req, res) => {
  console.log(req.body);
});

//stocklist route

module.exports = router;
