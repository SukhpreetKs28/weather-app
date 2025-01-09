function currentDate() {
  const now = new Date();
  console.log(now);

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getDay()];

  const dateTimeElement = document.querySelector("#date-time");
  dateTimeElement.innerHTML = `${day} ${hours}:${minutes}`;
}

currentDate();

const form = document.querySelector("#special-button");
form.addEventListener("submit", searchCity);

function searchCity(event) {
  event.preventDefault();
  const cityInput = document.querySelector("#city-input");
  const cityName = document.querySelector("#city-name");
  cityName.innerHTML = cityInput.value;
  console.log(cityInput.value);

  const apiKey = "b46533a578b6a6652o2b3t049bbf7307";
  const cityElement = cityInput.value;
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityElement}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);

  function displayTemp(response) {
    const temp = Math.round(response.data.temperature.current);
    const currentTemp = document.querySelector(".current-temperature-value");
    currentTemp.innerHTML = `${temp}°C`;
  }
}
