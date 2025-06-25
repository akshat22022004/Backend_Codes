const express = require("express");
const { handleGenerateNEWshortURl, handleGetAnalytics } = require("../controllers/url");
const router = express.Router();

router.post('/', handleGenerateNEWshortURl);

// Corrected route: changed `:shortid` to `:shortId`
router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;
