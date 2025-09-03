// console.log('Hello World! Node is working...');
const express = require('express'); //importing
const app = express();//instantiating it
//this is a standard way of doing things

app.listen(3000, () => console.log('listen on port 3000'));
//ports which are below 3000 lways have other ht