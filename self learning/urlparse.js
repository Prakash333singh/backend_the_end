const http = require("http");
const url = require("url");

//url.parse

http
  .createServer((req, res) => {
    console.log(req.url);

    const urlob = url.parse(req.url);
    console.log(urlob);
  })
  .listen(3000);
