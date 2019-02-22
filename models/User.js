var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const bcrypt = require('bcrypt');
const salfRounds = process.env.SALF_ROUNDS;

var cryptString = require('../helpers/CryptString.js');

var userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	active_token: String,
	created_time: String,
	meta: {
		avatar: String
	}
});

userSchema.pre('save', function(next){

	if (!this.password) {
		next();
	}
	else {
		cryptString.encode(this.password, function(hash){
			this.password = hash;
			next();
		});
	}

})

userSchema.statics.findUserByUserName = function(name, callback) {
	return this.find({ email: email}, callback);
}

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;