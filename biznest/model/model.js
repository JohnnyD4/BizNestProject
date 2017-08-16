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
	},

	showFriend: function(friendName, userID, cb) {
		orm.showFriend(friendName, userID, function(res) {

			cb(res);
		})
	},

	editProfile: function(userID, cb) {
		orm.editProfile(userID, function(res) {

			cb(res);
		})
	},

	saveEdits: function(userID, userName, phoneNumber, textNumber, emailAddress, bio, portfolio, linkedin, github, google, twitter, facebook, youtube, instagram, pinterest, tumblr, cb) {
		orm.saveEdits(userID, userName, phoneNumber, textNumber, emailAddress, bio, portfolio, linkedin, github, google, twitter, facebook, youtube, instagram, pinterest, tumblr, function(res) {

			cb(res);
		})
	}
}

module.exports = model;