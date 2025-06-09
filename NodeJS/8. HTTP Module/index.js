import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end("Hello World");
    // console.log(req);
    
});

server.listen(8000, () => console.log("Server is running at http://localhost:8000"));
