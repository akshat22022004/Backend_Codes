const fs = require("fs"); // it is used to import the all features of the fs in the system and try to use them.

// synchronous call
fs.writeFileSync("./test.txt","You will become successful");

// asynchronous call

// here if we place it into a variable then it will show undefined cause it is
// a synchronous call so it gives a call back and error and then gives a respective result.
fs.writeFile("./test.txt","utf-8",(err,result) =>{
    if(err){
        console.log("error show kro");
    }
    else{
        console.log(result);
    }
});

// you can also copy the file and create a new file in this manner in it.
// first write the name of the file and then the name of the file you want to create
fs.cpSync("./test.txt","./copy.txt");


// using this command we can create a new file in node js 
fs.mkdirSync("My-new-file")


// Blocking request or synchronous request
 console.log("2");
 fs.readFileSync("./copy.txt","utf-8");
 console.log("3");  // this case the output woudl be 2,copytext,3;

 // non Blocking request or asynchronous request in node js
 // here a call back function is always present in it.
 console.log("3");
 fs.readFile("./copy.txt",(error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
 })
 console.log("3");
 console.log("4");
 console.log("5"); // this case the output will be 3,3,4,5 data of copy txt because here the thread is not blocked
 // and further processing can be done

