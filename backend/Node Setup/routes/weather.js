const express = require("express");
const router = express.Router();
const axios = require("axios");


const baseURL = "http://api.weatherapi.com/v1/current.json";

const apiKey = "9a0e4d93fed64a1ca5074443241602";

const location = "Africa";


const url = `${baseURL}?key=${apiKey}&q=${location}&format=json`;

axios.get(url).then((res) => {
  const data = res.data;
  return data
})
.catch(error =>{
    console.error("Oops!Error getting data", error)
})

module.exports = router;


