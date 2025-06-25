// math related saare kaam yha ho isliye banaya hai
function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

module.exports = {
    add,
    sub,
}   // ek saath jyada function share krne ke liye ek object bana lo

exports.add(() => {}) // we can use this also 