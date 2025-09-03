// console.log('Hello World! Node is working...');
const express = require('express'); //importing
const app = express();//instantiating it
//this is a standard way of doing things

const port = 3000;

//routing. How an app responds to a client's request(a browser)
//Syntax of a route: app.METHOD(PATH, HANDLER)
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

 //Note: You can't have the same route for the same page even if the messages are different


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
  res.send('This is ' + req.query.name + 'from cohort '+ req.query.cohort+'the class of '+ req.query.class);
});


//when asking the browser always it looks like this
//localhost:3000/students?
//note:the ? is the beginning of the query string

//Rest API(App Programming Interface)
//Way apps interact with each other using http protocal

//Middleware(app.use)
app.use(express.urlencoded({ extended: true }));  //helps to pass data from forms.
//have to access the middleware before the routing so it can work

//Using next()
//Creating a simple time log
app.use(req, res, next) => {
  console.log('A new request received at ' + Date.now());
  
}






//serving html files
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");// this means that the file index.html is in the same folder as the server 
});

//res.sendFile() is used to locate a certain file
//Now if your file exists in a different file you have to indicate it's exact file path
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

//posting data on the database
//make two routes because one helps you get the data, another helps you post it
//1.
app.get("/stockForm", (req, res) => {
  res.sendFile(__dirname + "/html/file-2.html");
});

//2.
app.post("/stockForm", (req, res) => {
  console.log(req.body); // this looks at all the info being gathered from the body element
});



// non existent route handler(for pages that don't exist)
 //it should always be the 2nd last

 app.use((req, res) => {
   res.status(404).send("Oops! Route not found.");
 });



app.listen(port, () => console.log(`listen on port ${port}`));
//ports which are below 3000 always have other things running on them so always run from 3000-4000
//this shouls always be the last line in this file.


//APP ANATOMY. The structure of your server file
//1. DEPENDENCIES
//These are imported eg. express, nodemon. They're usually installed by "npm install..."

//2. INSTANTIATIONS
//Giving a variable a value eg. const..., let...

//3. CONFIGURATIONS
//Custom application based settings eg. pug, view engine

//4. MIDDLEWARE
//Used to determine the flow of request-response cycle eg. app.use

//5. ROUTES
//Used to perform operations

//6. BOOTSTRAPING A SERVER
//app.listen()

