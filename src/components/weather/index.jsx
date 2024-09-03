import React, { useEffect, useState } from "react";
import Search from "../search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      //   const response = await fetch("");
      //   const data = await response.json;
      const data = param;
      console.log(data, "data");
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }
  function handleSearch() {
    fetchWeatherData(search);
  }
  useEffect(() => {
    fetchWeatherData("Delhi");
  }, []);
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  var iconcode = "04d";
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-cyan-400 rounded-lg shadow-lg p-8 w-1/2">
        <header className="flex justify-center mb-4 p-2">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold ml-2">Weather App</h1>
          </div>
        </header>
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold">{weatherData}, IN</h2>
            <span className="text-lg">{getCurrentDate()}</span>
            <div className="text-5xl font-bold mb-4 flex">
              <div id="icon">
                <img id="weather-icon" src={iconurl} alt="Weather icon" />
              </div>
              {"55"}°C
            </div>
            <div className="flex justify-start mb-4">
              <div>
                <p className="text-lg p-1">Min: {"17"}°C /</p>
              </div>
              <div>
                <p className="text-lg  p-1"> Max: {"27"}°C</p>
              </div>
            </div>
            <p className="text-lg">Description</p>
            <div className="flex justify-around items-center space-x-10 p-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 122.88 74.78"
                    className="w-6 h-6"
                  >
                    <g>
                      <path d="M28.69,53.38c-1.61,0-2.91-1.3-2.91-2.91c0-1.61,1.3-2.91,2.91-2.91h51.37c0.21,0,0.42,0.02,0.62,0.07 c1.84,0.28,3.56,0.8,5.1,1.63c1.7,0.92,3.15,2.19,4.27,3.89c3.85,5.83,3.28,11.24,0.56,15.24c-1.77,2.61-4.47,4.55-7.45,5.57 c-3,1.03-6.32,1.13-9.32,0.03c-4.54-1.66-8.22-5.89-8.76-13.55c-0.11-1.6,1.1-2.98,2.7-3.09c1.6-0.11,2.98,1.1,3.09,2.7 c0.35,4.94,2.41,7.56,4.94,8.48c1.71,0.62,3.67,0.54,5.48-0.08c1.84-0.63,3.48-1.79,4.52-3.32c1.49-2.19,1.71-5.28-0.61-8.79 c-0.57-0.86-1.31-1.51-2.18-1.98c-0.91-0.49-1.97-0.81-3.13-0.99H28.69L28.69,53.38z M15.41,27.21c-1.61,0-2.91-1.3-2.91-2.91 c0-1.61,1.3-2.91,2.91-2.91h51.21c1.17-0.18,2.23-0.5,3.14-0.99c0.87-0.47,1.61-1.12,2.18-1.98c2.32-3.51,2.09-6.6,0.61-8.79 c-1.04-1.53-2.68-2.69-4.52-3.32c-1.81-0.62-3.78-0.7-5.48-0.08c-2.52,0.92-4.59,3.54-4.94,8.48c-0.11,1.6-1.49,2.81-3.09,2.7 c-1.6-0.11-2.81-1.49-2.7-3.09c0.54-7.66,4.22-11.89,8.76-13.55c3-1.09,6.32-0.99,9.32,0.03c2.98,1.02,5.68,2.97,7.45,5.57 c2.72,4,3.29,9.41-0.56,15.24c-1.12,1.7-2.57,2.97-4.27,3.89c-1.54,0.83-3.26,1.35-5.1,1.63c-0.2,0.04-0.41,0.07-0.62,0.07H15.41 L15.41,27.21z M2.91,40.3C1.3,40.3,0,38.99,0,37.39c0-1.61,1.3-2.91,2.91-2.91h107.07c1.17-0.18,2.23-0.5,3.13-0.99 c0.87-0.47,1.61-1.12,2.18-1.98c2.32-3.51,2.09-6.6,0.61-8.79c-1.04-1.53-2.68-2.69-4.52-3.32c-1.81-0.62-3.78-0.7-5.48-0.08 c-2.52,0.92-4.59,3.54-4.94,8.48c-0.11,1.6-1.49,2.81-3.09,2.7c-1.6-0.11-2.81-1.49-2.7-3.09c0.54-7.66,4.22-11.89,8.76-13.55 c3-1.09,6.32-0.99,9.32,0.03c2.98,1.02,5.68,2.97,7.45,5.57c2.72,4,3.29,9.41-0.56,15.24c-1.12,1.7-2.57,2.97-4.27,3.89 c-1.54,0.83-3.26,1.35-5.1,1.63c-0.2,0.04-0.41,0.07-0.62,0.07H2.91L2.91,40.3z" />
                    </g>
                  </svg>
                  <p className="text-lg font-semibold">20 m/s</p>
                </div>
                <p className="text-sm mt-1">Wind speed</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 83.95 122.88"
                    className="w-6 h-6"
                  >
                    <g>
                      <path d="M44.82,2.28c5.08,21.69,12.03,30.25,19.61,39.58c4.9,6.04,10.06,12.39,15.19,22.47c1.31,2.58,2.39,5.25,3.14,8.06 c0.76,2.84,1.19,5.79,1.19,8.87c0,5.68-1.04,10.99-3.11,15.92c-2.07,4.91-5.16,9.4-9.27,13.46c-4.12,4.05-8.65,7.11-13.6,9.16 c-4.96,2.05-10.3,3.08-16.01,3.08c-5.71,0-11.04-1.03-15.99-3.08c-4.93-2.04-9.45-5.1-13.57-9.16c-4.11-4.06-7.21-8.55-9.28-13.46 C1.04,92.25,0,86.94,0,81.26c0-2.91,0.38-5.7,1.06-8.39c0.67-2.64,1.64-5.18,2.84-7.66c5.02-10.38,10.29-16.84,15.36-23.07 c7.61-9.34,14.79-18.14,19.79-39.85c0.36-1.59,1.79-2.72,3.42-2.72C43.09,0,44.47,0.95,44.82,2.28L44.82,2.28z M41.98,78.41 c2.13,0,4.18,0.42,6.15,1.27c1.97,0.85,3.69,2.02,5.14,3.49c1.46,1.46,2.61,3.18,3.47,5.15c0.86,1.96,1.28,4.01,1.28,6.14 c0,2.13-0.42,4.18-1.28,6.15c-0.86,1.97-2.01,3.7-3.47,5.16c-1.45,1.46-3.17,2.62-5.14,3.48c-1.96,0.86-4.02,1.29-6.15,1.29 c-2.13,0-4.18-0.43-6.15-1.29c-1.97-0.86-3.69-2.02-5.15-3.48c-1.46-1.46-2.61-3.18-3.47-5.16c-0.86-1.97-1.29-4.02-1.29-6.15 c0-2.13,0.43-4.18,1.29-6.14c0.86-1.97,2.02-3.69,3.47-5.15c1.45-1.47,3.17-2.64,5.15-3.49C37.8,78.83,39.85,78.41,41.98,78.41 L41.98,78.41z" />
                    </g>
                  </svg>
                  <p className="text-lg font-semibold">55%</p>
                </div>
                <p className="text-sm mt-1">Humidity</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

/* 
import React, { useEffect, useState } from "react";
import Search from "../search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(location) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`
      );
      const data = await response.json();
      console.log(data, "data");
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  useEffect(() => {
    fetchWeatherData("Delhi");
  }, []);

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-cyan-400 rounded-lg shadow-lg p-8 w-1/2">
        <header className="flex justify-center mb-4 p-2">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold ml-2">Weather App</h1>
          </div>
        </header>
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {loading ? (
          <div>Loading...</div>
        ) : weatherData ? (
          <div>
            <h2 className="text-2xl font-bold">
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <span className="text-lg">{getCurrentDate()}</span>
            <div className="text-5xl font-bold mb-4 flex">
              <div id="icon">
                <img
                  id="weather-icon"
                  src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                  alt="Weather icon"
                />
              </div>
              {Math.round(weatherData.main.temp)}°C
            </div>
            <div className="flex justify-start mb-4">
              <div>
                <p className="text-lg p-1">
                  Min: {Math.round(weatherData.main.temp_min)}°C /
                </p>
              </div>
              <div>
                <p className="text-lg p-1">
                  Max: {Math.round(weatherData.main.temp_max)}°C
                </p>
              </div>
            </div>
            <p className="text-lg">{weatherData.weather[0].description}</p>
            <div className="flex justify-around items-center space-x-10 p-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 122.88 74.78"
                    className="w-6 h-6"
                  >
                    <g>
                      <path d="M28.69,53.38c-1.61,0-2.91-1.3-2.91-2.91c0-1.61,1.3-2.91,2.91-2.91h51.37c0.21,0,0.42,0.02,0.62,0.07 c1.84,0.28,3.56,0.8,5.1,1.63c1.7,0.92,3.15,2.19,4.27,3.89c3.85,5.83,3.28,11.24,0.56,15.24c-1.77,2.61-4.47,4.55-7.45,5.57 c-3,1.03-6.32,1.13-9.32,0.03c-4.54-1.66-8.22-5.89-8.76-13.55c-0.11-1.6,1.1-2.98,2.7-3.09c1.6-0.11,2.98,1.1,3.09,2.7 c0.35,4.94,2.41,7.56,4.94,8.48c1.71,0.62,3.67,0.54,5.48-0.08c1.84-0.63,3.48-1.79,4.52-3.32c1.49-2.19,1.71-5.28-0.61-8.79 c-0.57-0.86-1.31-1.51-2.18-1.98c-0.91-0.49-1.97-0.81-3.13-0.99H28.69L28.69,53.38z M15.41,27.21c-1.61,0-2.91-1.3-2.91-2.91 c0-1.61,1.3-2.91,2.91-2.91h51.21c1.17-0.18,2.23-0.5,3.14-0.99c0.87-0.47,1.61-1.12,2.18-1.98c2.32-3.51,2.09-6.6,0.61-8.79 c-1.04-1.53-2.68-2.69-4.52-3.32c-1.81-0.62-3.78-0.7-5.48-0.08c-2.52,0.92-4.59,3.54-4.94,8.48c-0.11,1.6-1.49,2.81-3.09,2.7 c-1.6-0.11-2.81-1.49-2.7-3.09c0.54-7.66,4.22-11.89,8.76-13.55c3-1.09,6.32-0.99,9.32,0.03c2.98,1.02,5.68,2.97,7.45,5.57 c2.72,4,3.29,9.41-0.56,15.24c-1.12,1.7-2.57,2.97-4.27,3.89c-1.54,0.83-3.26,1.35-5.1,1.63c-0.2,0.04-0.41,0.07-0.62,0.07H15.41 L15.41,27.21z M2.91,40.3C1.3,40.3,0,38.99,0,37.39c0-1.61,1.3-2.91,2.91-2.91h107.07c1.17-0.18,2.23-0.5,3.13-0.99 c0.87-0.47,1.61-1.12,2.18-1.98c2.32-3.51,2.09-6.6,0.61-8.79c-1.04-1.53-2.68-2.69-4.52-3.32c-1.81-0.62-3.78-0.7-5.48-0.08 c-2.52,0.92-4.59,3.54-4.94,8.48c-0.11,1.6-1.49,2.81-3.09,2.7c-1.6-0.11-2.81-1.49-2.7-3.09c0.54-7.66,4.22-11.89,8.76-13.55 c3-1.09,6.32-0.99,9.32,0.03c2.98,1.02,5.68,2.97,7.45,5.57c2.72,4,3.29,9.41-0.56,15.24c-1.12,1.7-2.57,2.97-4.27,3.89 c-1.54,0.83-3.26,1.35-5.1,1.63c-0.2,0.04-0.41,0.07-0.62,0.07H2.91L2.91,40.3z" />
                    </g>
                  </svg>
                  <span>{Math.round(weatherData.wind.speed)} m/s</span>
                </div>
                <p>Wind Speed</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20.25v-2.25m0-15v2.25m9 9h-2.25m-15 0H3m16.364 5.364l-1.591-1.591M7.227 7.227 5.636 5.636m12.728 0-1.591 1.591M7.227 16.773l-1.591 1.591"
                    />
                  </svg>
                  <span>{weatherData.main.pressure} hPa</span>
                </div>
                <p>Pressure</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3a6.75 6.75 0 0113.5 0v3.75h-13.5V3zm-1.5 5.25V21a6.75 6.75 0 0013.5 0V8.25H8.25zM3 16.5a6.75 6.75 0 0113.5 0v2.25H3v-2.25z"
                    />
                  </svg>
                  <span>{weatherData.main.humidity}%</span>
                </div>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        ) : (
          <div>No weather data available</div>
        )}
      </div>
    </div>
  );
};

export default Weather;
*/
