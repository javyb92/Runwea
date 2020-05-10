import axios from "axios";

export default {
  // Gets Weather Info
  // Ensure to get City Input so I can put it in url
  getCurrentWeather: function (city) {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        process.env.REACT_APP_KEY
    );
  },
};
