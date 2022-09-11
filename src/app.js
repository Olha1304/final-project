function search(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
}

let apiKey = "7cafac3dcf0545734b97129730d7c9f3";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Zhytomyr&appid=${apiKey}&units=metric";

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
