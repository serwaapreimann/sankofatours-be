const express = require('express');
const app = express();
require ("dotenv").config();
const cors = require ('cors');
const HotelRoute = require('./routes/hotels');
const countryRoute = require('./routes/country');
const WeatherRoute = require('./routes/weather');


app.use((cors));
app.use(express.json());

const PORT = 8080;

app.get('/', (req, res) => {
    return res.send ("Welcome to Sankofa");
});


app.use("/country", countryRoute);
app.use("/weather", WeatherRoute);
app.use("/hotels", HotelRoute);

app.listen(PORT, () =>{
    console.log (`You are on server ${PORT}`)
});