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
      "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=" +
        process.env.REACT_APP_KEY +
        "&lat=" +
        lat +
        "&lon=" +
        lon +
        "&cnt=1"
    );
  },

  getForcastWeather: function (f_city) {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        f_city +
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
