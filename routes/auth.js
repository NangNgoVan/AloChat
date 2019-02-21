var express = require('express');
var router = express.Router();
var authService = require('../services/AuthService.js');
/* GET login page. */
router.get('/login', function(req, res, next) {
  var email=req.query.email;
  var error=req.query.error;
  var params = {};
  params['email'] = email;
  if (error=='email_invalid') {
    params['email_invalid'] = 'Sai email!';
  }
  if (error=='password_wrong')
  	params['password_wrong'] = 'Sai mật khẩu!';
  res.render('login', params);
});

/* POST */
router.post('/login', function(req, res, next) {
  var email = req.body.email;
  var pass = req.body.password;

  authService.getUserByAuth(req.body.email, req.body.password, function(err, user){
  	if(user!=null){
  		// set session
  		if (user.password != pass) {
  			res.redirect(`/auth/login?email=${email}&error=password_wrong`);
  		}
  		else res.send('thành công')
  	}
  	else res.redirect(`/auth/login?email=${email}&error=email_invalid`);
  });
})

router.get('/signup/:token', function(req, res, next) {
  var token = req.params.token;
  var error = req.query.error;
  var params = {};

  params['token'] = token;
  if(error) params['error'] = error;

  res.render('signup', params);
})

router.post('/signup', function(req, res, next) {
  var token = req.body.token;
  var password = req.body.password;
  var confirmPassword = req.body.confirm_password;
  // check token is valid or not
  if (false) {
  	return res.redirect(`/auth/signup/${token}?error=token_invalid`)
  }

  if (password != confirmPassword) {
  	return res.redirect(`/auth/signup/${token}?error=pass_uncompared`)
  }
  
  res.send('Tạo thành công!');
  //var newUser = authService.createNewUser(req.body.email, req.body.password);

})

router.get('/get_email', function(req, res, next) {
	var sent = req.query.sent;
	var email = req.query.email;
	if(sent == 'true')
		res.render('get_email', {sent: sent, email: email});
	else res.render('get_email');
})

router.post('/get_email', function(req, res, next) {
	var email = req.body.email;
	res.redirect(`/auth/get_email?sent=true&email=${email}`);
});

module.exports = router;
