var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	meta: {
		avatar: String
	}
});

userSchema.statics.findUserByUserName = function(name, callback) {
	return this.find({ name: name}, callback);
}

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;