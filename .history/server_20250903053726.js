//1. DEPENDENCIES
const express = require('express');

//import route
const classRoutes = require("./routes/classRoutes");

//2. INSTANTIATIONS
const app = express();
const port = 3000;

//3. CONFIGURATIONS(pug)

//4. MIDDLEWARE
//sign-up page thing
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use("/about", (req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();
});
//for the home page the file path is not indicated cause it doesn't have to be hence app.use((req,res,next=>{}))..yeah

//5. ROUTES
app.post("/claire", (req, res) => {
   res.send("Got a POST request");
 });

app.get(`/pathparams/:username`, (req, res) => {
   res.send("This is the username" + req.params.username);
 });

 //for file-2.html
app.get("/stockForm", (req, res) => {
  res.sendFile(__dirname + "/html/file-2.html");
});

app.post("/stockForm", (req, res) => {
  console.log(req.body); 
});

//sign-up route
app.get('/sign-up', (req, res) => {
  res.sendFile(__dirname+ "/html/sign-up.html")
});

app.post("/sign-up", (req, res) => {
  console.log(req.body);
});

app.use('/')



app.use((req, res) => {
   res.status(404).send("Oops! Route not found.");
 });// REMEBER THIS IS FOR NON-EXISTANT ROUTES HENCE IT'S THE 2ND LAST

//6. BOOTSRTRAPING A SERVER
 app.listen(port, () => console.log(`listen on port ${port}`));