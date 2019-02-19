var express = require('express');
var router = express.Router();
var authService = require('../services/AuthService.js');
/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* POST */
router.post('/login', function(req, res, next) {
  authService.getUserByAuth(req.body.email, req.body.password, function(err, user){
  	if(user!=null){
  		// set session
  		res.send('thanh cong');
  	}
  	else res.redirect('back');
  });
})

router.get('/signup', function(req, res, next) {
  res.render('signup');
})

router.post('/signup', function(req, res, next) {
  //res.send(req.body.email+req.body.password);
  var newUser = authService.createNewUser(req.body.email, req.body.password);

})

module.exports = router;
