const url = require("url");
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    //request
    //index
    //about
    //services

    const path = req.url;
    if (path == "/about") {
      console.log("about page");
      res.writeHead(200, {
        "content-type": "text/html",
      });

      const fileContent = fs.readFileSync("./self learning/about.html");

      res.write(fileContent);

      res.end();
    } else if (path == "/") {
      console.log("home page");
      res.writeHead(200, {
        "content-type": "text/html",
      });

      const fileContent = fs.readFileSync("./self learning/home.html");

      res.write(fileContent);

      res.end();
    } else if (path == "/services") {
      console.log("service page");
      res.writeHead(200, {
        "content-type": "text/html",
      });

      const fileContent = fs.readFileSync("./self learning/services.html");

      res.write(fileContent);

      res.end();
    }
  })
  .listen(3001);
