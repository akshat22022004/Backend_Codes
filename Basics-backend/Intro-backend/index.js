const express = require('express');

const app = express();
const port = 3000;

// Correct GET request for root route
app.get('/', (req, res) => {
    // how to get or send an html path either give the root or specify the path
    res.sendFile('./dummy.html',{root:__dirname})
});

// GET request for /items
app.get('/items', (req, res) => {  
    res.send("Got a GET request");
});

// POST request
app.post('/items', (req, res) => {
   // res.send("Got a POST request");
   res.json({x:1,y:2,z:3})
});

// PUT request
app.put('/items/:id', (req, res) => {
    res.send("Got a PUT request for item with ID " + req.params.id);
});

// DELETE request (Fixed the path)
app.delete('/items/:id', (req, res) => {
    res.send("Got a DELETE request for item with ID " + req.params.id);
});

// Start server
app.listen(port, () => {
    console.log(`Babbar app listening on port ${port}`);
});
