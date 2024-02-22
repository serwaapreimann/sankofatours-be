const express = require('express');
const fs = require ('fs');
const router = express.Router();


router.get("/country", (req, res) =>{
    const fetchSiteAttractions = JSON.parse(fs.readFile('../data/site-attractions.json'))

    return res.status(200).json({fetchSiteAttractions})
});



module.exports = router