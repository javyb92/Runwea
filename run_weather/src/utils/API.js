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
};
