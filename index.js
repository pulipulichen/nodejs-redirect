const http = require('http');

const hostname = 'localhost';
const port = 3000; // You can change this port number

const redirectUrl = 'https://blog.pulipuli.info/';

const server = http.createServer((req, res) => {
  if (req.url === '/blog') {
    // Found the target URL, redirect to https://blog.pulipuli.info/
    res.writeHead(301, { Location: redirectUrl });
    res.end();
  } else {
    // Handle other requests (optional)
    // You can choose to serve a different page or return an error message
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});