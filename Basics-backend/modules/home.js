const math = require('./math.js'); // we use directory here ./ krke agar bus module or package 
// ka naam likh to node js me search krega 
const {add,sub} = require('./math.js'); // in this way we can destructure it after we import it

console.log("value is", math.add(2, 4));
console.log("value is",math.sub(4,1));
