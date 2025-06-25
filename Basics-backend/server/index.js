const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request received \n`;
    // agar yha blooking request hogi append file sync to thread pool block
   // aaur baaki events ko wait krna pad jaiga
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
            res.end("Internal Server Error");
            return;
        }
        switch (req.url) {
            case "/":
                res.end("Homepage");
                break;
            case "/about":
                res.end("About Page");
                break;
            default:
                res.end("404 Page Not Found");
        }
    });
    console.log(req.headers);
});

myServer.listen(8000, () => console.log("My server started on port 8000"));
