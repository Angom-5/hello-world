//will have that for login, sign-up
const express = require('express');
const router = express.Router();

//getting the sign-up file
router.get('/sign-up', (req, res) => {  //when using a template engine use render..it replaces a sendFile
    res.render("sign-up");//this is the pug fie 
})





















module.exports = router;