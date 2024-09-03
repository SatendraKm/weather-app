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
    fetchWeatherData("banglore");
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
            <h2 className="text-2xl font-bold">{weatherData}, Country</h2>
            <span className="text-lg">{getCurrentDate()}</span>
            <div className="text-5xl font-bold mb-4 flex">
              <div id="icon">
                <img id="weather-icon" src={iconurl} alt="Weather icon" />
              </div>
              {"55"}°C
            </div>
            <div className="flex justify-start mb-4">
              <div>
                <p className="text-lg">Min: {"17"}°C /</p>
              </div>
              <div>
                <p className="text-lg">Max: {"27"}°C</p>
              </div>
            </div>
            <p className="text-lg">Description</p>
            <div className="flex justify-between">
              <div>
                <p className="text-lg">20 m/s</p>
                <p className="text-sm">Wind speed</p>
              </div>
              <div>
                <p className="text-lg">55 %</p>
                <p className="text-sm">Humidity</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
