const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
  fs.readFile("./data/nightlife.json", (err, data) => {
    if (err) {
      console.error("Error reading json file", err);
      return res.status(404).json({ error: "Internal Server Error" });
    }

    const fetchnightLife = JSON.parse(data);
    return res.status(200).json({ nightLife: fetchnightLife });
  });
});

module.exports = router;