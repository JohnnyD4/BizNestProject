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

    },

    getUserProfile: function(userID, cb) {

        var testUserQueryString = "SELECT * FROM `user` WHERE `user_ID` = '" + userID + "';";

        connection.query(testUserQueryString, function(err, data) {

            if (err) throw err;

            cb(data);
        })
    },

    addFriend: function(friendID, userID, cb) {

        var queryString = "SELECT `name` FROM `user` WHERE `user_ID` = '" + friendID + "';";

        connection.query(queryString, function(err, data) {

            if(err) throw err;


            console.log(data[0].name);

            // cb(data);
            try{

                if (data[0].name) {

                    var userQueryString = "SELECT `contacts` FROM `user` WHERE `user_ID` = '" + userID + "';";

                    connection.query(userQueryString, function(err, result) {
                        if (err) throw err;

                        console.log(result[0].contacts);

                        if (result[0].contacts === null) {

                            var insertQueryString = "UPDATE `user` SET `contacts` = ('" + data[0].name + "-" + friendID + "') WHERE `user_ID` = '" + userID + "';";
                        
                            console.log(insertQueryString);

                            connection.query(insertQueryString, function(err, data) {

                                if (err) throw err;

                                var selectString = "SELECT `contacts` FROM `user` WHERE `user_ID` = '" + userID + "';";

                                connection.query(selectString, function(err, data) {

                                    if (err) throw err;

                                    cb(data[0].contacts);
                                })
                            })

                        } else {

                            var split = result[0].contacts.split(',');
                            // data[0].name.appendTo(split);
                            // console.log("split", split.indexOf(data[0].name));
                            
                            if (split.indexOf(data[0].name) === -1) {

                                var updateQueryString = "UPDATE `user` SET `contacts` = ('" + result[0].contacts + "," + data[0].name + "') WHERE `user_ID` = '" + userID + "';";

                                connection.query(updateQueryString, function (err, response) {

                                    if (err) throw err;

                                    var selectString = "SELECT `contacts` FROM `user` WHERE `user_ID` = '" + userID + "';";

                                    connection.query(selectString, function(err, data) {

                                        if (err) throw err;

                                        cb(data[0].contacts);
                                    })
                                })
                            } else {

                                // console.log(data[0].name + " is already in your contacts");
                                cb(data[0].name + " is already in your contacts");
                            }
                        }
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