//will have that for login, sign-up
const express = require('express');
const router = express.Router();

//getting the sign-up file
router.get('/sign-up', (req, res) => {  //when using a template engine use render..it replaces a sendFile
    res.render("sign-up", {title:});//this is the pug file with your html(obviously)
})





















module.exports = router;