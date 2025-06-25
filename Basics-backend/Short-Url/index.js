const express = require("express");
const { connectTomongoDb } = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/url');

const app = express();
const port = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectTomongoDb('mongodb://localhost:27017/short-url')
  .then(() => console.log('mongo-db connected'));

app.use("/url", urlRoute);

// Route to handle redirection and update visit history
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    // Find and update the URL entry by shortId
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: { timestamp: Date.now() },  // Explicitly push timestamp to visitHistory array
            },
        },
        { new: true } // Ensure the updated document is returned after modification
    );

    // If the entry is not found, send a 404 error
    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    // Redirect to the original URL
    res.redirect(entry.redirectUrl);
});

app.listen(port, () => console.log(`Server started at port ${port}`));
