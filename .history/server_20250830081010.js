// console.log('Hello World! Node is working...');
const express = require('express'); //importing
const app = express();//instantiating it
//this is a standard way of doing things

const port = 3000;
//routing. How an app responds to a client's request(a )
app.get('/', (req, res) => {
    res.send('Homepage, Hello world!');
});
// the home page has a path of '/' cause it's our landing page

app.get("/about", (req, res) => {
  res.send("Homepage, Hello world!");
});
// this shows the the about page

 app.post("/claire", (req, res) => {
   res.send("Got a POST request");
 });

 app.put("/user", (req, res) => {
   res.send("Got a PUT request at /user");
 });

 app.delete("/user", (req, res) => {
   res.send("Got a DELETE request at /user");
 });

 // non existent route handler

 app.use((req, res) => {
   res.status(404).send("Oops! Route not found.");
 });

 //PATH PARAMETERS AND QUERY STRINGS(params)
 //Used to request specific data from a server.
 //Path Params(written inside so they can work)
 app.get("/profile/:username", function (req, res) {
   var username = req.params.username;
   //get profile from database using the username
 });
 app.get(`/pathparams/:username`, (req, res) => {
     res.send("This is the username"+ req.params.username);
 });

//Query strings(optionally written cause the route can work without you writing them)
 app.get(`/querystrings`, (req, res) => {
   res.send("" + req.query.name);
 });

//eg;
 app.get(`/students`, (req, res) => {
  res.send('This is' + req.query.name + 'from'+ req.query.cohort+'the class of'+ req.query.class);
});













app.listen(port, () => console.log(`listen on port ${port}`));
//ports which are below 3000 always have other things running on them so always run from 3000-4000
//this shouls always be the last line in this file.