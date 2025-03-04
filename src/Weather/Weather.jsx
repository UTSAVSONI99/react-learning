import React from "react";
import "./Weather.css";

function Weather() {
  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDay();
  const year = currentDate.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  return (
    <div className="App">
      <div className="container">
        <h1 className="container_date"> {formattedDate}</h1>
        <div className="weather_data">
          <h2 className="container_city">Delhi</h2>
          <img
            className="container_img"
            src="./thunder.png"
            width="180px"
            alt="thunder"
          />
          <h2 className="container_degree"> 32°C</h2>
          <h3 className="container_para">Thunderstorm</h3>
          <form className="form">
            <input
              type="text"
              className="input"
              placeholder="Enter city name"
            />
            <button type="submit"> Get</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Weather;
