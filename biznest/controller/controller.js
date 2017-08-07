var express = require("express");

var localStorage = require("localStorage");

var router = express.Router();

var sessionStore = require("../config/connection.js")['sessionStore'];

// var session = require('../config/connection')['session'];

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

router.post("/facebook/login/:userID", function(req, res, next) {
	console.log("facebook login");
	// req.session.userID = "";
	// console.log(req.body.name);
	// console.log(req.body.picture.data.url);
	// console.log("userID:", req.body.userID);
	// console.log("accessToken:", req.body.accessToken);
console.log("params", req.params.userID);
	model.insertFacebookUser(
		req.body.name,
		req.body.picture.data.url,
		req.body.userID,
		req.body.accessToken, 
		function(data) {
			// console.log(data[0].user_ID);
			// testUserID = data.user_ID;
			req.session.UserID = data[0].user_ID;
			localStorage.setItem('user', data[0].user_ID);
			

			res.send(data);	
		})
	console.log("req.session",req.session);
		console.log(localStorage.getItem('user'));
})

router.get("/facebook/login", function(req, res, next) {
	console.log("facebook get ");


	console.log("get sesstion", req.session);
	if(req.session.userID) {
		console.log("user ID", req.session.userID);
		res.send("hello")
	}
	
	// model.testing("1805067389507703", function(data) {
	// 	console.log(data[0]);
	// 	res.send(data[0]);
	// })

	// var data = {
 //    id: 4,
 //    name: 'John Davis',
 //    user_ID: '1805067389507703',
 //    access_token: 'EAAG9xptgWD0BAKaGsdwZBqirCvxJZCqY4cFPtlf4YKlVxWiuaiYRXTui5Hhx3EPnZCN5LsPKTQuIXD6RsgHUKC2anBndZBYzVEP6XZAkQ2v29WPKgoZCoSeVu6TWwSKGXKZBUH4KnAluQFQFd7P1stkzUFdZBL23X7gRlsFp9IgagveqKY9tXsY2HZAgt08ZA9jygZD',
 //    work_phone: "954-434",
 //    text_phone: null,
 //    profile_image: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/10984026_1091095590904890_2071409968664339199_n.jpg?oh=05a00accaf293ffb8509867712996903&oe=5A00A2B8',
 //    biography: "Hello, my name is John Davis and this is a testing bio!",
 //    portfolio: "https://codepen.io/JohnDavis4/full/wJyjzP/",
 //    linkedin: null,
 //    github: null,
 //    google: null,
 //    twitter: null,
 //    facebook: "https://facebook.com",
 //    instagram: null,
 //    youtube: null,
 //    pinterest: null,
 //    tumblr: null,
 //    contacts: null }

 //    console.log(data);
	// res.send(data);
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