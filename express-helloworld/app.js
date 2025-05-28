var express = require('express');
app = express();

...output omitted..app
var response;



app.get('/', function (req, res) {

      response = 'This is version 2 of the app.' + '\n';



          //send the response to the client

              res.send(response);



});

...output omitted...

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

