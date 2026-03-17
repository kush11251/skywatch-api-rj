const express = require('express');
const router = express.Router();
const weatherDataModel = require('../models/weatherData');

router.get('/current', async (req, res) => {
    const currentWeatherData = await weatherDataModel.getCurrentWeatherData();
    res.json(currentWeatherData);
});

router.get('/forecast', async (req, res) => {
    const forecastData = await weatherDataModel.getForecastData();
    res.json(forecastData);
});

module.exports = router;