const express = require("express");
const app = express();
// require ("dotenv").config();
const cors = require("cors");
const HotelRoute = require("./routes/hotels");
const countryRoute = require("./routes/country");
const nightlifeRoute = require("./routes/nightlife");

app.use(cors());
app.use(express.json());

const PORT = 5050;

app.get("/", (req, res) => {
  return res.send("Welcome to Sankofa");
});

//These are your baseURLs...
app.use("/country", countryRoute);
app.use("/hotels", HotelRoute);
app.use("/nightlife", nightlifeRoute);
app.use("/images", express.static("../public/images"));
//-------------------------------------------
app.listen(PORT, () => {
  console.log(`You are on server ${PORT}`);
});
