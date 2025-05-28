// Define a route for the root path

const { application } = require("express");

application.get('/', function (req, res) {

      // Send the response directly

          res.send('This is version 2 of the app.\n');

});