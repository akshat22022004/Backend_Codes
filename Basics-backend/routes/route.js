const express = require('express');  
const router = express.Router();  

// Middlewares  
const auth = function (req, res, next) {  
    console.log('I am inside auth middleware');  
    req.user = { userId: 1, role: "student" };  

    if (req.user) {  
        next();  
    } else {  
        res.json({  
            success: false,  
            message: "Not a valid user"  
        });  
    }  
};  

const isStudent = function (req, res, next) {  
    console.log("I am inside student wala middleware");  

    if (req.user.role === "student") {  
        next();  
    } else {  
        res.json({  
            success: false,  
            message: "Access denied, this route is only for students"  
        });  
    }  
};  

const inside = function (req, res, next) {  
    console.log("I am inside wala admin");  
    next();  
};  

// Routes  

module.exports = router;  
