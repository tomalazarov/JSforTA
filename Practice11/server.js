//Task 1
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/vote' && req.method === 'GET') {
//     const response = 'Your vote is accepted: ' + new Date().toLocaleDateString();
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(response);
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 - Not Found');
//   }
// });

// server.listen(5500, () => {
//   console.log('Server running on port 5500');
// });


