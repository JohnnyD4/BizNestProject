var orm = require("../config/orm.js");

var model = {
	testing: function(emailAddress, password, cb) {
		orm.testing(emailAddress, password, function (res) {

			cb(res);
		})
	},

	insertFacebookUser: function(name, profileImage, userID, accessToken, cb) {
		orm.insertFacebookUser(name, profileImage, userID, accessToken, function(res) {

			cb(res);
		})
	}
}

module.exports = model;