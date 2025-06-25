const express = require("express")

const app = express.Router();

// JSON Data Route
app.get("/", (req, res) => {
    return res.json(users);
});

// Dynamic Route to Get User by ID
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
});

// POST: Create a new user in MongoDB
app.post("/", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

// PATCH: Update user by ID in MongoDB (Fixed route path)
app.patch("/api/users/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(updatedUser);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = app;