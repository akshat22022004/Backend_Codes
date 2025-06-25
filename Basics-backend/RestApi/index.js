const express = require("express");
const fs = require("fs");

const app = express();
const port = 4000;

// Reading mock user data from JSON file
const users = JSON.parse(fs.readFileSync('./mockdata.json', 'utf8'));

// Send HTML list of user names to browser
app.get("/users", (req, res) => {
  let html = "<ul>";
  if (users.length) {
    users.forEach(user => {
      html += `<li>${user.firstName}</li>`;  // ✅ Corrected template literal
    });
  } else {
    html += "<li>No users found</li>";
  }
  html += "</ul>";
  res.send(html);
});

// RESTful API that sends JSON data with a custom header
app.get("/api/users", (req, res) => {
  res.setHeader("x-my-name", "Akshat Singh"); // ✅ Valid header name
  res.json(users);
});

// Handle requests for individual user by ID
app.route("/api/users/:id")
  .get((req, res) => {
    const user = users.find(u => u.id === req.params.id);
    res.json(user || { error: "User not found" });  // Optional safety check
  })
  .patch((req, res) => {
    res.json({ status: "pending" }); // Placeholder response
  });

// Handle new user creation (not implemented yet)
app.post("/api/users", (req, res) => {
  res.json({ status: "pending" });
});

// Handle user deletion (not implemented yet)
app.delete("/api/users", (req, res) => {
  res.json({ status: "pending" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
