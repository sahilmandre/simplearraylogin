const express = require('express')
const fs = require('fs');
const router = express.Router();

const names = require('../names/names');


router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', function (req, res) {

const username = req.body.username;
console.log(`username: ${username}`);
// add the Username
names.push(username);

res.redirect('/users')

})



module.exports = router;