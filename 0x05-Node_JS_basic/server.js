const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  console.log(req);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'test/plain');
  res.end('Hello world');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
