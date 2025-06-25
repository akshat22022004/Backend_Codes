const fs = require("fs") // fs is build in 

// synchronous call  Blocking op..
fs.writeFileSync("./test.txt" , "hellow world");

// asynchronous call to make a file Non-blocking op..
fs.writeFile("./text.txt","hellow world",(err) =>{})

// to read an exsisting file
// Synchronous call hai ye 
const result = s.readFileSync('./contacts.txt', "utf-8") // utf 8 to encode and read the file
console.log(result);


// read file ye asynchronus hai ye ek call back marega aaur kuch return nahi krega
fs.readFile("./contacts.txt","utf-8",(err,result) =>{
if(err){
    console.log("chutiya ho")
}
else{
    console.log(result);
}
fs.cpSync("./test.txt","./copy.txt");

});
// we can also perform apppend operation on the files
// synchronous and it appends in the file and never overrites it
fs.appendFileSync('./test.txt' , new Date().getDate().toLocaleString());

// we can even create a folder
// synchronously we can create a file
fs.mkdirSync("My-new-file")





// Blocking request 
console.log("1")

const res = fs.readFileSync("contack.txt","utf-8");
console.log(res); // here it blocs so ans comes 1 result(ans) 2

console.log("2");



//Non-bloocking request
console.log("1")

fs.readFile("contact.txt","utf-8",(err,result) =>{
    console.log(result);
})  // here 1 2 and then result (ans) because it does not blocks and lets other process until it,s result comes

console.log("2");