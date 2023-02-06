/* $("button").on("click", function() {
queryUrlLatLon = ' http://api.openweathermap.org/geo/1.0/direct?q=''+ city '&limit=5&appid=' +'apikey';
queryUrlCity =  */

let cities = []

/* function renderButtons() {
    $("#history").empty();
  
    for (let i = 0; i < cities.length; i++) {
      let a = $("<button>");
  
      a.attr("data-name", cities[i]);
  
      a.addClass("city-select");
  
      a.text(cities[i]);
  
      $("#history").append(a);
    }
  } */

  

//Search Button - Set City criteria

 $(".search-button").on("click", function(event) {
    event.preventDefault();

    const city = $('#search-input').val().trim();
  

   console.log(city);


   cities.push(city)
   console.log (cities) 

   function cityLonLat(){
  

    let queryURL =  'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=9481f6f32f0743b787311fa853b1bc28';

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
    
        console.log(response)

        console.log(response[0].lat);
        console.log(response[0].lon);
    })

   
  

    
 
}

cityLonLat();
 })

 

/*  renderButtons(); */

 // console.log ($(this).parent().parent().attr('id'));
   /*  var city = $(this).attr.val() */

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
 