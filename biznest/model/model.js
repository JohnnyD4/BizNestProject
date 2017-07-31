var orm = require("../config/orm.js");

var model = {
	testing: function(firstName, cb) {
		orm.testing(firstName, function (res) {

			cb(res);
		})
	}
}

module.exports = model;