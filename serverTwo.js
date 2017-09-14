// This is a mean port
var http = require("http");
var meanThings = ["your really bad at most things", "you literally stink", "your best friend is not real"]
var rand = meanThings[Math.floor(Math.random() * meanThings.length)];

var PORT = 7500;
// two arguements request and response
function handleRequest(request, response){
    response.end(rand + request.url)

}
// pass it in ^^ below in the create server function

var server = http.createServer(handleRequest); 

server.listen(PORT, function(){
console.log("Server listening on: http://localhost:%s", PORT)

});
