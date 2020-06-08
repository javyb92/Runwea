import axios from "axios";

export default {
  getCurrentWeather: function (city) {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        process.env.REACT_APP_KEY
    );
  },

  getUVIndex: function (lat, lon) {
    return axios.get(
      "https://api.weatherbit.io/v2.0/current?" +
        "&lat=" +
        lat +
        "&lon=" +
        lon +
        "&key=" +
        process.env.REACT_APP_KEY_WB
    );
  },

  getForcastWeather: function (lat, lon) {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=imperial&appid=" +
        process.env.REACT_APP_KEY
    );
  },

  getWeatherAlert: function (lat, lon) {
    return axios.get(
      "https://api.weatherbit.io/v2.0/alerts?" +
        "lat=" +
        lat +
        "&lon=" +
        lon +
        "&key=" +
        // process.env.REACT_APP_KEY_WB
        // Below is test key, above is production
        process.env.REACT_APP_KEY_WB_TEST
    );
  },

  getGeoLocCurrentWeather: function (glon, glat) {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        glat +
        "&lon=" +
        glon +
        "&units=imperial&appid=" +
        process.env.REACT_APP_KEY
    );
  },
};
