var User = require('../models/User.js');

class AuthService {
	static createNewUser(username, password) {
		var user = new User({
		  email: username,
		  password: password
		});

		user.save().then(function(user){
          return user;  
		})
	}
	static getUserByAuth(username, password, callback) {
		User.findOne({email:username, password:password}).exec(callback)
	}
}

module.exports = AuthService;