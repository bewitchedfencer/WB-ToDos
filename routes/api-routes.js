// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var db = require("../models");
// =============================================================


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

//why am I building this when I could just use Trello?
//ANSWER: because this is how I learn

//PATCH route for editing items once they are added

//PATCH route for updating when an item is completed

//PATCH route for updated when an item is deleted/archived -- might not have this feature

//POST route for adding a new item

//API GET all to be displayed as a JSON object. Later update so that it has its own Handlebars page