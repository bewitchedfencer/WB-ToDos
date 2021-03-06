// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var db = require("../models");
var moment = require('moment');
// =============================================================

module.exports = function(app){

    //GET route for getting all of the todos, reminders, and followups (maybe using views would be easier for displaying these)
app.get("/", function(req, res){
    db.AdminToDo.findAll({}).then(function(results){
        var handlebarsObj = {
            item:results
        };
        console.log(handlebarsObj);
        res.render("index", handlebarsObj);

    });
});

//how do I get this to render properly?
app.get("/dailies", function(req, res){
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    // console.log(today); used for testing, this is functional
    var hdbsObj = {
        page:today
    }
   res.render("dailies", hdbsObj);
});
};