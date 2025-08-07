import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   console.log(req);
  const log = `${Date.now()}: New request received\n`;
  fs.appendFile("log.txt", log, (err, data)=>{
      res.end("Hello World");
  });
  // res.write("<H1>Hello from Node.js Server</H1")
  //   res.setHeader("Content-type", "text/html");
  //   res.statusCode = 404;
  //   res.statusMessage = "Something went wrong";
  //   res.end("<h1>404 - Something went wrong</h1>");
});

server.listen(8000, () =>
  console.log("Server is running at http://localhost:8000")
);
