// math.js
const add = (a, b) => {
    return a + b;
};
const sub = (a,b) =>{
    return a - b;
}

module.exports = { // in this way the add function can get over written in the code when we import it.
    add,
    sub
};
// second method which we can use 

 // Toh iska matlab hota hai ki poora file sirf ek hi default export de raha hai.
export default  (a,b) => a + b;  // in this manner we can also export and here the overwrite nahi krta hai 
// it completely depends upon the use case 
