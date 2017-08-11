var orm = require("../config/orm.js");

var model = {
	testing: function(userID, cb) {
		orm.testing(userID, function (res) {

			cb(res);
		})
	},

	insertFacebookUser: function(name, profileImage, userID, accessToken, cb) {
		orm.insertFacebookUser(name, profileImage, userID, accessToken, function(res) {

			cb(res);
		})
	},

	getUserProfile: function(userID, cb) {
		orm.getUserProfile(userID, function(res) {

			cb(res);
		})
	},

	addFriend: function(friendID, userID, cb) {
		orm.addFriend(friendID, userID, function(res) {

			cb(res);
		})
	}
}

module.exports = model;