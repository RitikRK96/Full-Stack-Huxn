import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>Home Page</h1><a href='/about'>About</a>");
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1>About Section</h1>");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(8000, () => console.log("Server is Up at http://localhost:8000"));
