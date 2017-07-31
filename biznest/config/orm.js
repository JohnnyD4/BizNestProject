var connection = require("../config/connection.js")['connection'];

var orm = {
	testing: function(firstName, cb) {

		var queryString = "SELECT * FROM `user` WHERE first_name = '" + firstName + "';";

		// console.log("orm line 8", queryString);

		connection.query(queryString, function(err, data) {
			if (err) throw err;

			// console.log("orm data line 13", data);

			cb(data);
		})
	} 
}

module.exports = orm;