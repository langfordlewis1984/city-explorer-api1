const express = require("express");

const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

const data = require("./data/weather.json");

// lat lon searchQuery

function filterCities(searchQuery, lat, lon) {
  const result = data.find((city) => data.city_name == city);
  return result;
}

app.get("/", (request, response) => {
  response.json("CITY EXPLORER");
});

app.get("/weather", (request, response) => {
  response.json(data);
});

data.find;

app.get("/", (request, response) => {
  let dataToReturn = data;

  if (request.query.city_name) {
    dataToReturn = filterCities(searchQuery, lat, lon);
  }

  response.json(dataToReturn);
});

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
