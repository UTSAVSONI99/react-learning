import { useState, useEffect } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Get current date
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
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = months[currentDate.getMonth()];
  const dayName = days[currentDate.getDay()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${dayName}, ${month} ${day}, ${year}`;

  const API_key = "bcda10ba323e88e96cb486015a104d1d";

  // Fetch weather data
  const fetchWeatherData = async () => {
    try {
      setError(null); // Reset error before fetching
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  // Fetch weather data on component mount and when the city changes
  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  // Handle city input change
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  // Get weather icon URL

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clear":
        return "/sun.png"; // Path to your sunny weather icon
      case "Rain":
        return "/thunder.png"; // Path to your rainy weather icon
      case "Snow":
        return "/tornado.png"; // Path to your snowy weather icon
      case "Haze":
        return "/sun.png"; // Path to your haze weather icon
      // Add more cases for other weather conditions as needed
      default:
        return null;
    }
  };
  return (
    <div className="App">
      <div className="container">
        <h1 className="container_date">{formattedDate}</h1>

        {error && <p className="error">{error}</p>}

        {weatherData && (
          <div className="weather_data">
            <h2 className="container_city">{weatherData.name}</h2>
            <img
              className="container_img"
              src={getWeatherIconUrl(weatherData.weather[0].main)}
              width="180px"
              alt="Weather Icon"
            />
            <h2 className="container_degree">{weatherData.main.temp}°C</h2>
            <h2 className="container_para">
              {weatherData.weather[0].main}
              <span className="degree_icon"></span>
            </h2>
          </div>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter city name"
            value={city}
            onChange={handleCityChange}
            required
          />
          <button type="submit">Get Weather</button>
        </form>
      </div>
    </div>
  );
}

export default Weather;
