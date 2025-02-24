const express = require("express");
const router = express.Router();
const path = require("path");

// Add this route to serve product images
router.get("/images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  res.sendFile(path.join(__dirname, "../assets", imageName));
});

module.exports = router;
