var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* POST */
router.post('/login', function(req, res, next) {
  res.send(req.body.email + " " + req.body.password);
})

router.get('/signup', function(req, res, next) {
  res.render('signup');
})
module.exports = router;
