import React from "react";
import SearchComponent from "./components/SearchComponent";
import Dayweather from "./components/Dayweather";
import Dailyweather from "./components/Dailyweather";
import { useState } from "react";
import { useEffect } from "react";
import { getCurrentWeatherData } from "./Api";
import { loadingGif } from "./assets";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [currentCity, setCurrentCity] = useState("Nyeri");
  const [currentWeather, setCurrentWeather] = useState();
  function handleChange(event) {
    setSearchText(event.target.value);
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setCurrentCity(searchText);
    }
  }
  useEffect(() => {
    getCurrentWeatherData(currentCity).then((data) => {
      setCurrentWeather(data);
    });
  }, [currentCity]);
  console.log(currentWeather);
  return (
    <div className="search">
      <SearchComponent
        searchText={searchText}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      <div
        className="main-part"
        style={currentWeather === undefined ? { justifyContent: "center" } : {}}
      >
        {currentWeather === undefined ? (
          <img src={loadingGif} alt="loading-gif" />
        ) : (
          <>
            <Dayweather
              currentWeather={currentWeather}
              currentCity={currentCity}
            />
            <Dailyweather currentWeather={currentWeather} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
