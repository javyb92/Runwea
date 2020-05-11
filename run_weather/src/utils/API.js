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
};
