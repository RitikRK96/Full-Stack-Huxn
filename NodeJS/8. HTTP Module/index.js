import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.url);
    // console.log(req);
    // res.write("<H1>Hello from Node.js Server</H1")
    // res.end("Hello World");
    res.setHeader("Content-type", "text/html")
    res.statusCode = 404;
    res.statusMessage("Something went wrong")
});

server.listen(8000, () => console.log("Server is running at http://localhost:8000"));
