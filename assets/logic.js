let cities = [];
//let lats = []
//let lons=[]
let lat;
let lon;
let city;

let list = document.getElementById('history')



//Search Button - Set City criteria

$(".search-button").on("click", function (event) {
  event.preventDefault();

  city = $("#search-input").val().trim();

  console.log(city);

  cities.unshift(city);
  console.log(cities);

  cityLonLat();
  
});

function cityLonLat() {
  let queryURL =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=1&appid=9481f6f32f0743b787311fa853b1bc28";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    /*   console.log(response[0].lat);
        console.log(response[0].lon) */

    lat = response[0].lat;
    lon = response[0].lon;

    getCityWeather();
    /* console.log(lat);
        console.log(lon) ;
     */
    //lats.unshift(lat)
    //lons.unshift(lon)

    //console.log(lats)
    //console.log(lons)
  });
}

//console.log(lats[0])

// Get specific city weather function

function getCityWeather() {
  //let queryURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lats[0] + '&lon=' + lons[0] + '&appid=9481f6f32f0743b787311fa853b1bc28'
  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=9481f6f32f0743b787311fa853b1bc28";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    //display data on html

    $("#cityName").text(response.name);
    $("#cityTemp").text(response.main.temp + " degrees");
    $("#cityHumidity").text(response.main.humidity + ' g.m-3');
    $("#cityWindSpeed").text(response.wind.speed + ' mph');

    getFiveDay();
  });

  /* cities.forEach(item=>{
    var historicSearch = $('<li>')
    var 
}) */
}

function getFiveDay() {
  let queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=9481f6f32f0743b787311fa853b1bc28";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    for (let i = 0; i < response.list.length; i += 8) {
      console.log(response.list[i]);

      var cardDiv = $('<div>')
      var cardBody = $('<div>')
      var weatherIcon = $('<img>')
      var cardTitle = $('<h3>')
      var cardDate = $('<h4>')
      var cardContent = $('<ul>')
      var cardWeather = $('<li>')
      var cardTemp = $('<li>')
      var cardWindSpeed = $('<li>')
      var cardHumidity = $('<li>')

      cardTitle.text(response.city.name)
      cardDate.text(response.list[i].dt_txt)
      cardTemp.text(response.list[i].main.temp + " degrees")
      weatherIcon.attr('src', '  http://openweathermap.org/img/w/' +response.list[i].weather[0].icon+'.png') 
     cardWeather.text(response.list[i].weather[0].main)
    cardWindSpeed.text(response.list[i].wind.speed  + ' mph')
    cardHumidity.text(response.list[i].main.humidity + ' g.m-3')
     
      
      cardBody.append(cardTitle)
      cardBody.append(cardDate)
      cardBody.append(weatherIcon) 
    cardContent.append(cardWeather)
    cardContent.append(cardTemp)
    cardContent.append(cardWindSpeed)
    cardContent.append(cardHumidity)
     cardBody.append(cardContent)

      $('#cardContainer').append(cardBody)

    }
  });
}

cities.forEach((item) => {
  let li = document.createElement($('<li>'))
  li.innerText = item;
  list.appendChild(li)
})




/* 
let cityNameEl = document.querySelector('#cityName')  */
/*   
$('#cityNameEl').text('cities[0]') */

/* function updateMain () {

     let cityNameEl = document.querySelector('#cityName') 
  
    $('#cityNameEl').innerText = cities[0]
} */

//early thinking v

// console.log ($(this).parent().parent().attr('id'));
/*  var city = $(this).attr.val() */

/*  early working out.  $("button").on("click", function() {
queryUrlLatLon = ' http://api.openweathermap.org/geo/1.0/direct?q=''+ city '&limit=5&appid=' +'apikey';
queryUrlCity =  */

// URLS

// geocodeing url to get longitutde and latitude
//url1 =  'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=9481f6f32f0743b787311fa853b1bc28';

// weather url
//url2 =  'https://api.openweathermap.org/data/2.5/weather?lat=' +lat + '&lon=' + lon + '&appid=9481f6f32f0743b787311fa853b1bc28';

/* function cityLonLat(){
    let cityInp = city;
    console.log(cityInp);

    let queryURL =  'http://api.openweathermap.org/geo/1.0/direct?q=' + cityInp + '&limit=5&appid=9481f6f32f0743b787311fa853b1bc28';

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
    
        console.log(response)
    })
} */

// tutors fetch demo

/* fetch(url1)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        var lat = data.lat
        var lon = data.lon

        fetch(url2)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            displayWeatherData(data)
        })
    })
 })
 */
