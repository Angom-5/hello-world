const express = require('express');
const router = express.Router();





router.post("/claire", (req, res) => {
   res.send("Got a POST request");
 });

router.get(`/pathparams/:username`, (req, res) => {
   res.send("This is the username" + req.params.username);
 });

 //for file-2.html
router.get("/stockForm", (req, res) => {
  res.sendFile(__dirname + "/html/file-2.html");
});

router.post("/stockForm", (req, res) => {
  console.log(req.body); 
});

//sign-up route
router.get('/sign-up', (req, res) => {
  res.sendFile(__dirname+ "/html/sign-up.html")
});

router.post("/sign-up", (req, res) => {
  console.log(req.body);
});


module.exports = router;
//every file must have this line cause if it doesn't means that they can't use the routes