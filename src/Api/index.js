const API_KEY = "ae2a0b0783c26f2da1386f42ae36fb88";


async function getCurrentWeatherData(cityName) {

  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export { getCurrentWeatherData };
