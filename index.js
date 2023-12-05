// const data=require("./add");
// console.log(data);

//local modules
// const { sayHello, sayThanks } = require("./add");

// sayHello();
// sayThanks();

// const http=require("http");
// const server=http.createServer((req, res) => {
//     console.log("hello");
//     res.end("hello response");

// })

// server.listen(3000, ()=>{
//     console.log("server running on 3000");
// })

//learning by self

var http = require("http");

var host = "127.0.0.1";
var port = 3000;

var server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  console.log("server Working");
  response.end("Server Working Success");
});

server.listen(port, host, (error) => {
  if (error) {
    return console.log("Error occured : ", error);
  }

  console.log("server is listening on " + host + ":" + port);
});
