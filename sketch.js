let apiKey = '6c2dec0ef4cfdedee9cfbc13a532ecf7';
let weatherData;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let searchBtn = select('#search-btn');
  searchBtn.mousePressed(getWeather);
  
}

function draw() {
  background(255);
  fill(0);
  textSize(20);
  textAlign(CENTER);
  if (weatherData) {
    text(`City: ${weatherData.name}`, width / 2, 30);
    text(`Temperature: ${weatherData.main.temp} °C`, width / 2, 60);
    text(`Description: ${weatherData.weather[0].description}`, width / 2, 90);
  }
}

function getWeather() {
  let city = select('#search-input').value();
  let units = 'metric'; // 
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  loadJSON(apiUrl, gotWeatherData);
}

function gotWeatherData(data) {
  weatherData = data;
}
