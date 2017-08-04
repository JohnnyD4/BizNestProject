var connection = require("../config/connection.js")['connection'];

var orm = {
	testing: function(userID, cb) {

		var queryString = "SELECT * FROM `user` WHERE user_ID = '" + userID + "';";

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
	},

    insertFacebookUser: function(name, profileImage, userID, accessToken, cb) {

        var testUserQueryString = "SELECT * FROM `user` WHERE `user_ID` = '" + userID + "';";

        connection.query(testUserQueryString, function(err, data) {

            if (err) throw err;

            try{

                if (!data[0]) {

                    var queryString = "INSERT INTO `user` (name, profile_image, user_ID, access_token)";

                    queryString += "VALUES ('" + name + "', '" + profileImage + "', '" + userID + "', '" + accessToken + "');";

                    connection.query(queryString, function(err, data) {

                        if (err) throw err;

                        cb(data);
                    })
                
                } else {

                    cb(data);
                }

            } catch(err) {

                cb("data")
            }
        })

        

    } 
}

module.exports = orm;