// console.log('Hello World! Node is working...');
const express = require('express'); //importing
const app = express();//instantiating it
//this is a standard way of doing things

//routing
app.get('/', (req, res) => {
    res.send('Homepage, Hell')
})












app.listen(3000, () => console.log('listen on port 3000'));
//ports which are below 3000 always have other things running on them so always run from 3000-4000
//this shouls always be the last line in this file.