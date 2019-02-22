var User = require('../models/User.js');

class AuthService {
	static createNewUser(attributes, callback) {
		var newUser = new User(attributes);

		return User.findOne({email: newUser.email}, function(err, user){
			if(err) {
				callback(err, null);
				return;
			}

			if(user != null) {
				callback(err, user);
				return;
			}

			newUser.save(function(err){
				if(err) return callback(null);
				callback(newUser);
			});
		});
	}
	static getUserByUsername(username, callback) {
		return User.findOne({email:username}).exec(callback)
	}
}

module.exports = AuthService;