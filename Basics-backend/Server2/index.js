const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello from Home Page' + 'hey' + req.query.name + 'you are' + req.query.age); 
});

app.get('/about', (req, res) => {
    return res.send(`Hellow ${req.query.name}`); 
});

// Removed myHandler function, express handles routes
// function myHAndler(req, res) {
//     if (req.url === "/favicon.ico") return res.end();

//     const log = `${Date.now()}: New Request received\n`;

//     fs.appendFile('log.txt', log, (err) => {
//         if (err) {
//             res.statusCode = 500;
//             return res.end("Internal Server Error");
//         }

//         switch (req.url) {
//             case "/":
//                 if (req.method == 'GET') res.end('Homepage');
//             case "/about":
//                 return res.end("About");
//             case '/signup':
//                 if (req.method === 'GET') res.end('This is a signup form');
//                 else if (req.method === 'POST') {
//                     // DB Query
//                     res.end("Success");
//                 }
//             default:
//                 res.end("404 not found");
//         }
//     });
// };

// const myServer = http.createServer(app); // Corrected: Changed 'myServer' to 'server' and using express app

// const server = http.createServer(app);

// server.listen(8000, () => console.log("Server started on port 8000!")); // Corrected: Changed 'myServer' to 'server'

app.listen(8000 ,() => console.log("Server started"));