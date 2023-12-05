//events
//htttp request aeeiii tuo kya response dena hai
//wo events ke help se kar skte hai

// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("checkPage", (data) => {
//   console.log("event occur", data.message);
// });

// emitter.emit("checkPage", { message: "hello world" });

//stream
//there are 4 types of streams
//1.readable streams 2.writable streams 3.duplex streams 4.transform streams
//duplex->do both things(write,read).
//trasfrom streams is also a special type of duplex streams
//which transfers data and modify it.
// const fs = require("fs");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url !== "/") {
//     return res.end();
//   }

// const file=fs.readFileSync('file.txt');
// return res.end(file)
//   const readFilestream = fs.createReadStream("file.txt");

//   ReadableStream.toString("data", (chunk) => {
//     res.write(chunk);
//   });
//   ReadableStream.on("end", () => {
//     res.end();
//   });
//   ReadableStream.on("error", (err) => {
//     console.log(err);
//     res.statusCode = 500;
//     res.end("internal server error");
//   });
// const ReadableStream = fs.createReadStream("file.txt");
// ReadableStream.pipe(res);
//  });

// server.listen(3000, () => {
//   console.log("listening");
// });
