const axios = require('axios');
const express = require("express");
const router = express.Router();




// const baseUrl = 'https://api.makcorps.com/';
//  const apiKey = '65d673a98e58820526071ac7';

// // const headers = {
// //   'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTc2NzczNjAsImlkZW50aXR5IjozLCJuYmYiOjE1MTc2NzczNjAsImV4cCI6MTUxNzY3OTE2MH0.ytSqQj3VDymEaJz9EIdskWELwDQZRD1Dbo6TuHaPz9U'
// // };

// const url = `${baseUrl}?key=${apiKey}&`

// axios.get(url)
//   .then(response => {
//     console.log("hi"+ JSON.stringify(response.data.data));
//   })
//   .catch(error => {
//     console.error(error);
//   });





module.exports = router