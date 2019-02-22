const bcrypt = require('bcrypt');
const saltRounds = 32;

class CryptString {
	static encode(str, callback) {
		return bcrypt.hash(str, saltRounds).then(function(hash){
			callback(hash);
		});
	}
	static compare(str, hash, callback) {
		return bcrypt.compare(str, hash, saltRounds).then(function(res){
			callback(res);
		})
	}
	static makeRandomStr() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (var i = 0; i < saltRounds; i++)
		  text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}
}

module.exports = CryptString;