var orm = require("../config/orm.js");

var model = {
	testing: function(emailAddress, password, cb) {
		orm.testing(emailAddress, password, function (res) {

			cb(res);
		})
	}
}

module.exports = model;