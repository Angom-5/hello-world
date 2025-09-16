//will have that for login, sign-up
const express = require('express');
const router = express.Router();

const userModel= require

//getting the sign-up file
router.get('/sign-up', (req, res) => {  //when using a template engine use render..it replaces a sendFile
    res.render("sign-up", { title: "Sign-Up page" });//this is the pug file with your html(obviously)
  

}) //you can add the title of the tab by {title:"..."}

router.post("/sign-up", (req, res) => {
  console.log(req.body);
  res.redirect("/login"); //you specify the route path you want it to go into
});
//collects whatever is written in the form


//login route
router.get('/login', (req, res) => {
  res.render("login")
});

router.post("/login", (req, res) => {
  console.log(req.body);
});


















module.exports = router;