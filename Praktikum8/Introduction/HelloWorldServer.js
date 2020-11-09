var http = require("http");

http.createServer(function (request, response) {
    //send the http header
    //http status: 200 : ok
    //Content Type : text/plain 
    response.writeHead(200, {"Content-Type" : "text/plain"});

    //send the respons body as "hello world"
    response.end('Hello World Server\n');
}).listen(8081);

// console will print the message
console.log('Server running at http://127.0.0.1:8081/');