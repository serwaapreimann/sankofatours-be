const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
  fs.readFile("./data/site-attractions.json", (err, data) => {
    if (err) {
      console.error("Error reading json file", err);
      return res.status(404).json({ error: "Internal Server Error" });
    }

    const fetchSiteAttractions = JSON.parse(data);
    return res.status(200).json({ siteAttractions: fetchSiteAttractions });
  });
});

module.exports = router;
