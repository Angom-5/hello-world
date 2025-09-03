//1. DEPENDENCIES
const express = require('express');

//2. INSTANTIATIONS
const app = express();
const port = 3000;

//3. CONFIGURATIONS(pug)

//4. MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

app.use("/about", (req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();
});
//for the home page the file path is not indicated cause it doesn't have to be hence app.use((req,res))

//5. ROUTES
app.post("/claire", (req, res) => {
   res.send("Got a POST request");
 });

app.get(`/pathparams/:username`, (req, res) => {
   res.send("This is the username" + req.params.username);
 });

app.get("/stockForm", (req, res) => {
  res.sendFile(__dirname + "/html/file-2.html");
});

app.post("/stockForm", (req, res) => {
  console.log(req.body); 
});

app.use((req, res) => {
   res.status(404).send("Oops! Route not found.");
 });// REMEBER THIS IS FOR NON-EXISTANT ROUTES HENCE IT'S THE 2ND LAST

//6. BOOTSRTRAPING A SERVER
 app.listen(port, () => console.log(`listen on port ${port}`));