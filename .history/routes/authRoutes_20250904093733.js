//will have that for login, sign-up
const express = require('express');
const router = express.Router();

//getting the sign-up file
router.get('/sign-up', (req, res) => {  //when using a template engine use render..it replaces a sendFile
    res.render("sign-up", { title: "Sign-Up page" });//this is the pug file with your html(obviously)
    res.redirect(/login);//you specify the route path you want it to go into

}) //you can add the title of the tab by {title:"..."}

router.post("/sign-up", (req, res) => {
    console.log(req.body);
});
//collects whatever is written in the form


//login route
app.get('/login', (req, res) => {
  res.sendFile(__dirname+ "/html/sign-up.html")
});

app.post("/login", (req, res) => {
  console.log(req.body);
});


















module.exports = router;