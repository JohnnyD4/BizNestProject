var express = require("express");

var router = express.Router();

var sessionStore = require("../config/connection.js")['sessionStore'];

var model = require('../model/model.js');

router.get("/home", function(req, res) {
	console.log("hello");
	model.testing("John", function(data) {

	console.log("controller", data[0].email_address);
	})

	// res.render("index");
})

router.post("/Login", function(req, res) {
	console.log(" post Login");
})

router.get("/Login", function(req,res) {
	console.log("get login");
	res.send("login");
})


module.exports = router;