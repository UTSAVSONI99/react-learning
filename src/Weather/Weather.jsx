import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

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

  const formattedDate = `${days[currentDate.getDay()]}, ${
    months[currentDate.getMonth()]
  } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  const API_key = "bcda10ba323e88e96cb486015a104d1d";

  const fetchWeatherData = async () => {
    try {
      setError(null);
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

  const handleCityChange = (e) => setCity(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(); // Fetch data only when the button is clicked
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clear":
        return "/sun.png";
      case "Rain":
        return "/thunder.png";
      case "Clouds":
        return "/tornado.png";
      case "Haze":
        return "/sun.png";
      default:
        return "/default.png"; // Default icon if not found
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">{formattedDate}</h1>
      {error && (
        <p className="bg-red-500 px-4 py-2 rounded-md text-center">{error}</p>
      )}

      {weatherData && (
        <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">{weatherData.name}</h2>
          <img
            src={getWeatherIconUrl(weatherData.weather[0].main)}
            className="w-32 mb-2"
            alt="Weather Icon"
          />
          <h2 className="text-4xl font-bold">{weatherData.main.temp}°C</h2>
          <h2 className="text-lg mt-2">{weatherData.weather[0].main}</h2>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col md:flex-row gap-2"
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
          required
          className="px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-md text-white font-semibold hover:bg-blue-700 transition"
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default Weather;
