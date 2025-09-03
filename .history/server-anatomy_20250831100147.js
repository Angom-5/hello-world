//1. DEPENDENCIES
const express = require('express');

//2. INSTANTIATIONS
const app = express();
const port = 3000;

//3. CONFIGURATIONS(pug)

//4. MIDDLEWARE
app.use(express.urlencoded({ extended: true }));

//
