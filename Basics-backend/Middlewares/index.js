const express = require('express')

const app = express()

const port = 5000

// //loading middlewares into the app
// // inbuild middleware

app.use(express.json());

// //middlewares -> login,authentication and validation

// // order of the  middle wares are very important when we use them

// // creation of middleware
const loggingmiddleware = function(req,res,next){
    console.log('Logging krra hu')
    next();
 }
// // loading of middlewares 
app.use(loggingmiddleware);

/**
 * This function is an authentication middleware that is likely used to verify user credentials before
 * allowing access to certain routes or resources.
 * @param req - The `req` parameter in the `authenticationmiddleware` function typically refers to the
 * request object in Node.js or Express.js. This object contains information about the HTTP request
 * being made, such as the request headers, parameters, body, and more. It allows you to access and
 * manipulate the incoming request data
 * @param res - The `res` parameter in the `authenticationmiddleware` function refers to the response
 * object in Node.js. This object represents the HTTP response that an Express app sends when it
 * receives an HTTP request. It is used to send data back to the client, such as HTML, JSON, or other
 * content.
 * @param next - The `next` parameter in the `authenticationmiddleware` function is a callback function
 * that is used to pass control to the next middleware function in the stack. When called, it tells
 * Express to move on to the next middleware function. This is commonly used in Express middleware
 * functions to pass control from one middleware
 */
const authenticationmiddleware = function(req,res,next){
    console.log("authentcation krra hu")
     next();
 }

app.use(authenticationmiddleware);

 const validationmiddleware = function(req,res,next){
     console.log("Vlaidation kra hu")
     next();
}

app.use(validationmiddleware);

 app.get('/',(req,res)=>{
     console.log("mai route handler hoon")
     console.log(res.body);
     res.send('Hellow world')
 })


app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})

