const express=require





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
