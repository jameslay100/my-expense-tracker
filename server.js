const http = require('http');

http.createServer(function (request, response) {
    console.log("We got a request from: " + request.url);
    response.write("Thank you for your request");
    response.end();
})
.listen(8080);