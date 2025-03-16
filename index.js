const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Elaboo Server on DigitalOcean!');
});

server.listen(3000, () => {
    console.log('Server läuft auf Port 3000');
});
