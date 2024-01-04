//Task 1
// const http = require('http');
// const os = require('os');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });

//   const userInfo = os.userInfo();
//   const systemInfo = {
//     username: userInfo.username,
//     osType: os.type(),
//     uptime: Math.floor(os.uptime() / 60), 
//     cwd: process.cwd(),
//     filename: path.basename(__filename) 
//   };

//   res.write(`<h1>System Information</h1>`);
//   res.write(`<p><strong>Username:</strong> ${systemInfo.username}</p>`);
//   res.write(`<p><strong>OS Type:</strong> ${systemInfo.osType}</p>`);
//   res.write(`<p><strong>Uptime (minutes):</strong> ${systemInfo.uptime}</p>`);
//   res.write(`<p><strong>Current Working Directory:</strong> ${systemInfo.cwd}</p>`);
//   res.write(`<p><strong>Server Filename:</strong> ${systemInfo.filename}</p>`);

//   res.end();
// });

// server.listen(5500, () => {
//   console.log('Server running on port 5500');
// });


//Task2 
const http = require('http');
const personalModule = require('./personalmodule');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const userInfo = os.userInfo(); 
  const username = userInfo.username;
  const greetingMessage = personalModule.getGreeting(username);

  res.write(`<p>${greetingMessage}</p>`);
  res.end();
});

server.listen(8000, () => {
  console.log('Server running on port 8000');
});
