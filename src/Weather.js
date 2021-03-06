import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${props.city} is ${Math.round(response.data.main.temp)}`
    );
  }
  let apiKey = "0dfb1eea5df6a4969c179ad0edfab896";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <Loader type="Puff" color="Orange" height={50} width={50} timeout={3000} />
  );
}
