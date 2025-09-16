//1. DEPENDENCIES
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const passport = require("passport");
const expressSession = require("express-session");

require("dotenv").config();

//import route
// const classRoutes = require("./routes/classRoutes");
const authRoutes = require("./routes/authRoutes");
const stockRoute = require("./routes/stockRoute");



//2. INSTANTIATIONS
const app = express();
const port = 3000;

//3. CONFIGURATIONS(pug)
//setting up mongoDB connections
mongoose.connect(process.env.MONGODB_URL); //It means you're accessing a file called ".env" and it has a variable called "MONGODB_URL"
  //
  


mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// setting view engine to pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//4. MIDDLEWARE
//sign-up page thing
// app.use(express.static('public'));

//sometimes this thing refuses to work so the alternative is
app.use(express.static(path.join(__dirname, 'public')));
//one of either not both

app.use(express.urlencoded({ extended: true }));

app.use("/about", (req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();
});
//for the home page the file path is not indicated cause it doesn't have to be hence app.use((req,res,next=>{}))..yeah

 //5. ROUTES
// app.post("/claire", (req, res) => {
//    res.send("Got a POST request");
//  });

// app.get(`/pathparams/:username`, (req, res) => {
//    res.send("This is the username" + req.params.username);
//  });

 //for file-2.html
// app.get("/stockForm", (req, res) => {
//   res.sendFile(__dirname + "/html/file-2.html");
// });

// app.post("/stockForm", (req, res) => {
//   console.log(req.body); 
// });

//sign-up route
// app.get('/sign-up', (req, res) => {
//   res.sendFile(__dirname+ "/html/sign-up.html")
// });

// app.post("/signup", (req, res) => {
//   console.log(req.body);
// });



//using imported routes
// app.use('/', classRoutes);
app.use("/", authRoutes);
app.use("/", stockRoute);




app.use((req, res) => {
   res.status(404).send("Oops! Route not found.");
 });// REMEBER THIS IS FOR NON-EXISTANT ROUTES HENCE IT'S THE 2ND LAST

//6. BOOTSRTRAPING A SERVER
 app.listen(port, () => console.log(`listen on port ${port}`));





