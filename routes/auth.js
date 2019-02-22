var express = require('express');
var router = express.Router();
var authService = require('../services/AuthService.js');
var cryptString = require('../helpers/CryptString.js');
var mailer = require('../helpers/Mailer.js');

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

  authService.getUserByUsername(req.body.email, function(err, user){
  	if(user!=null) {
  		console.log(pass);
  		cryptString.compare(pass, user.password, function(result){
  			if(!result) {
  				res.redirect(`/auth/login?email=${email}&error=password_wrong`);
  			}
  			else {
  				res.send('thành công');
  			}
  		})
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
	if(sent)
		res.render('get_email', {sent: sent, email: email});
	else res.render('get_email');
})

router.post('/get_email', function(req, res, next) {
	var email = req.body.email;

    var token = cryptString.makeRandomStr();
    
    authService.createNewUser({
      email: email,
    	active_token: token,
    	created_time: ''
    }, function(err, user){

    	if(user==null) {
    		// lỗi.
    		res.redirect(`/auth/get_email?sent=false&email=${email}`);
    		return;
    	};

    	console.log(user);
      console.log(process.env.SMTP_ADDR);

      var mailOptions = {
    		from: process.env.MAIL_USER,
    		to: email,
    		subject: 'Kích hoạt tài khoản',
    		html: `Mã kích hoạt tài khoản của bạn là: ${token}`,
    		html: `Mã kích hoạt tài khoản của bạn là: ${token}`
    	}

      mailer.verify(function(err, success) {
        if(err){
          console.log(err);
          res.redirect(`/auth/get_email?error=mail_sys_error`);
        }
        else {
          mailer.sendMail(mailOptions, function(err, info){
            if (err) {
             console.log(err);
             res.redirect(`/auth/get_email?sent=false&email=${email}`);
            }
            else {
             res.redirect(`/auth/get_email?sent=true&email=${email}`);
            }
          });
        }

      });
    });
});

module.exports = router;
