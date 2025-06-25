
// include express module and initializing an app
const express = require('express'); // to include or get any function cause we have used express

const app = express(); // initialize app using express

// variable that stores the port number

const port = 3000; // the port on which the app will run 


// app ke  uppar kaise request create kr sakte ho different paths ke use se
app.get('/',(req,res)=>{
    res.send('Hellow world')
})
// get -> request
// path => /. /about,/articles, /blog

// start ur app on the server

// listen agar us port se request aayegi to wo accept krega
app.listen(port,() =>{
    console.log("Application start ho chuki hai")
});







