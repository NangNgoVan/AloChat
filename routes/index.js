var express = require('express');
var router = express.Router();
var authService = require('../services/AuthService.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(true) res.redirect('/auth/login');
  else
    res.render('index', { title: 'Alo Chat' });
});

module.exports = router;
