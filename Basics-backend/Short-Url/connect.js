// connect.js
const mongoose = require("mongoose");

async function connectTomongoDb(url) {
    try {
        await mongoose.connect(url); // No need for extra options anymore
        console.log("Connected to MongoDB locally!");
    } catch (err) {
        console.error("MongoDB connection failed:", err);
    }
}

module.exports = {
    connectTomongoDb,  // Exporting the function
};
