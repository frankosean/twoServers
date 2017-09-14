// This is a nice port
var http = require("http");
var niceThings = ["you are really pretty", "your good at things", "you smell decent"]
var rand = niceThings[Math.floor(Math.random() * niceThings.length)];

var PORT = 7000;
// two arguements request and response
function handleRequest(request, response){
    response.end(rand + request.url)

}
// pass it in ^^ below in the create server function

var server = http.createServer(handleRequest); 

server.listen(PORT, function(){
console.log("Server listening on: http://localhost:%s", PORT)

});
