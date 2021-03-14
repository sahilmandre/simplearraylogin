const express = require('express')
const fs = require('fs');
const router = express.Router();
const names = require('../names/names');

router.get('/users', (req, res) => {
  console.log(`Names: ${names}`);

  
  res.render('users',{names:names});
});


module.exports = router;