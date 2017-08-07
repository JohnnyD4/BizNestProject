// dependencies 
// =========================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// var path = require("path");

var sessionStore = require('./config/connection')['sessionStore'];
var session = require('./config/connection')['session'];
// console.log(sessionStore);

var app = express();
var port = process.env.PORT||4000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

// app.use(express.bodyParser());


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    
}));

// app.engine('html', require('html').__express);
// app.set("view engine", "html"); // set up handlebars for templating

// Import routes and give the server access to them.
var routes = require("./controller/controller.js");

app.use("/", routes);

//listening
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});	