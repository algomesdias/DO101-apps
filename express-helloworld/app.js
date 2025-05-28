var response;



application.get('/', function (req, res) {

      response = 'This is version 3 of the app.' + '\n';



          //send the response to the client

              res.send(response);

});