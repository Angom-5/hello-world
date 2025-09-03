//1. DEPENDENCIES
const express = require('express');

//2. INSTANTIATIONS
const app = express();
const port = 3000;

//3. CONFIGURATIONS(pug)

//4. MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

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


//6. BOOTSRTRAPING A SERVER
 app.listen(port, () => console.log(`listen on port ${port}`));