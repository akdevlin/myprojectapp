//include the express.js module
var express = require('express');
//include the util module
var util = require('util');
//checking for dev environment port or public port?
var port = process.env.PORT || 3000;
//the app?
var app = express();
//deploy to public directory
app.use(express.static(__dirname + '/public'));
//even listener? callback function that logs a message
app.listen(port, function(){
    //uses a template string
    console.log(`Server is up and running on ${port}`);
    //uses the util object, adds timestamp
    util.log("Server is up and running on " + port);
});

