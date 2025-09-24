//1. DEPENDENCIES
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")
const moment = require("moment");

require("dotenv").config();
const UserModel = require("./models/userModel");

//import route
const authRoutes = require("./routes/authRoutes");
const stockRoutes = require("./routes/stockRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

//2. INSTANTIATIONS
const app = express();
const port = 3000;

//3. CONFIGURATIONS
app.locals.moment = moment;

//setting up mongoDB connections
mongoose.connect(process.env.MONGODB_URL);

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Connection error: ${err.message}`);
  });

//setting view engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//4. MIDDLEWARE
//this is for static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

//this is for the pug files
app.use(express.urlencoded({ extended: true }));

//this is for a session which is the time period a user interacts with the website
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URL }), 
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, 
  }) 
);

//passport configs
app.use(passport.initialize()); 
app.use(passport.session()); 

//aunthentication with passport local strategy
passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser()); 
passport.deserializeUser(UserModel.deserializeUser()); 

//time logger
// app.use("/about", (req, res, next) => {
//   console.log("A new request received at " + Date.now());
//   next();
// });
//for the home page the file path is not indicated cause it doesn't have to be hence app.use((req,res,next=>{}))..yeah


//using imported routes
app.use("/", authRoutes);
app.use("/stock", stockRoutes);
app.use('/dashboard', dashboardRoutes);

app.use((req, res) => {
  res.status(404).send("Oops! Route not found.");
}); // REMEBER THIS IS FOR NON-EXISTANT ROUTES HENCE IT'S THE 2ND LAST

//6. Setting the server to listening
app.listen(port, () => console.log(`listen on port ${port}`));
