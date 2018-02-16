// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
//Dependencies

//express used for easier server creation and use
var express = require("express");
//parses information sent via routes from html into objects
var bodyParser = require("body-parser");

// ******************************************************************************

//Sets up the express app
// ******************************************************************************
var app = express();
//port will be 3000 for local host and variable for use with heroku/server services
var PORT = process.env.PORT || 3000;

//Requiring models for syncing
var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//static directory for front end
app.use(express.static("public"));

// ******************************************************************************

//Routes
// ******************************************************************************
require("./routes/api-routes.js")(app);

//Syncing the sequelize model and listening on express server
// ******************************************************************************
db.sequelize.sync({force:true}).then(function(){
    app.listen(PORT, function(){
        console.log(`App listening on port ${PORT}.`);
    });
});
