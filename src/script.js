let now = new Date();
let date = now.getDate();
let year = now.getFullYear();
let hour = now.getHours();
let min = now.getMinutes();
let days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];
let day = days[now.getDay()];
let months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
let month = months[now.getMonth()];
let today = document.querySelector("#current-date");
today.innerHTML = `${date} ${month} ${year}`;
let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = `${day}`;
let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${hour} : ${min} Clear`;

function headerCity(event) {
  event.preventDefault();
  let header = document.querySelector("#card-header");
  let city = document.querySelector("#city-input");
  header.innerHTML = `${city.value}`;
  let apiKey = "61a00158157281b17d78893cef3a8938";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", headerCity);

function showTemperature(response) {
  console.log(response.data.main);
  let temperature = document.querySelector("#city-degrees");
  temperature.innerHTML = `${response.data.main.temp}`;
}

function showLocTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = document.querySelector("#city-degrees");
  temperature.innerHTML = `${response.data.main.temp}`;
  let h1 = document.querySelector("#card-header");
  h1.innerHTML = `${response.data.name}`;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "61a00158157281b17d78893cef3a8938";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}
&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showLocTemperature);
}
function getPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", getPosition);
