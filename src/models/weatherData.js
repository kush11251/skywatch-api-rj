const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
    temperature: String,
    humidity: String,
    windSpeed: String
});

const weatherDataModel = mongoose.model('WeatherData', weatherDataSchema);

weatherDataModel.getCurrentWeatherData = async () => {
    const currentWeatherData = await weatherDataModel.find().sort({$natural: -1}).limit(1);
    return currentWeatherData;
};

weatherDataModel.getForecastData = async () => {
    const forecastData = await weatherDataModel.find().sort({$natural: -1}).limit(5);
    return forecastData;
};

module.exports = weatherDataModel;