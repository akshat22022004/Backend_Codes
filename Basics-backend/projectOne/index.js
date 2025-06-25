const express = require("express");
const users = require('./MOCK_DATA.json');

const {connectMongoDb} = require('./connection')

const userrouter = require('./Routes/user')

const app = express();
const PORT = 8080;

connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1/");
// Middleware to parse JSON
app.use(express.json());

// Mongoose Schema (Move this before using it)


// Define Mongoose model (Fix incorrect usage)
const User = mongoose.model('User', userSchema);

// HTML Page Route
app.get('/users', (req, res) => {
    const html = `
    <html>
    <head><title>Users List</title></head>
    <body style="background-color: white; color: black; font-family: Arial, sans-serif;">
        <h1>Users List</h1>
        <ul>
            ${users.map(user => `<li>${user.first_name} ${user.last_name} - ${user.email}</li>`).join('')}
        </ul>
    </body>
    </html>
    `;
    res.send(html);
});


app.use("/user",userrouter)
// Start the server
app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
