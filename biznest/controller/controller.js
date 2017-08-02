var express = require("express");

var router = express.Router();

var sessionStore = require("../config/connection.js")['sessionStore'];

var model = require('../model/model.js');

router.get("/home", function(req, res) {
	console.log("hello");
	

	// res.render("index");
})

router.post("/api/login", function(req, res, next) {
	// console.log(" post Login");
	console.log(req.body);

	var emailAddress = req.body.emailAddress;

	var password = req.body.password
	model.testing(emailAddress, password, function(data) {

	// console.log("controller", data[0].email_address);
		console.log(data);
		res.send(data);
		// res.redirect("/profile");
	})
	
})

router.post("/facebook/login", function(req, res, next) {
	console.log("facebook login");

	// console.log(req.body.name);
	// console.log(req.body.picture.data.url);
	// console.log("userID:", req.body.userID);
	// console.log("accessToken:", req.body.accessToken);

	model.insertFacebookUser(
		req.body.name,
		req.body.picture.data.url,
		req.body.userID,
		req.body.accessToken, 
		function(data) {
			console.log(data);
			res.send(data);	
		})
})

router.get("/api/login", function(req, res, next) {
	console.log("get login");
	model.testing("John", function(data) {

	console.log("controller", data[0].email_address);
	var dataPack = {
		firstName: data[0].first_name,
		lastName: data[0].last_name,
		emailAddress: data[0].email_address
	}
	res.send(data);
	})
	
})

router.get("/profile", function(req, res) {
	console.log("profile");
})


module.exports = router;