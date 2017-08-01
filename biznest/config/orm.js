var connection = require("../config/connection.js")['connection'];

var orm = {
	testing: function(emailAddress, password, cb) {

		var queryString = "SELECT * FROM `user` WHERE email_address = '" + emailAddress + "'";

    queryString += " AND password = '" + password + "';";

		// console.log("orm line 8", queryString);

		connection.query(queryString, function(err, data) {
			if (err) throw err;
          
        try{

          if(!data[0]) {
          
            throw new Error("Incorrect email or password");
          
          }else {

            cb(data);

          }

        }catch(error){

          console.log(error.message);
          cb(error.message);
        } 


		})
	} 
}

module.exports = orm;