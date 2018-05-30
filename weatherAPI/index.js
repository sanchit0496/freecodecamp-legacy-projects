$(document).ready(function(){

  var api = 'https://fcc-weather-api.glitch.me/api/current?lat=23&lon=77';
  
    
    var api;
    var lon;
    var lat;
    var fTemp;
    var cTemp;
    var kTemp;
   
   if (navigator.geolocation) {    navigator.geolocation.getCurrentPosition(function (position) {
  
  lat = position.coords.latitude
  lon = position.coords.longitude
  
   $("#data").html("The Latitude is " + lat + ", and The Longitude is " + lon);              
   
     
   });
     }
    
    
    
  
    
    
    $.getJSON(api, function(data){
      
       var weatherType = data.weather[0].description;
    cTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;  
  
      
   kTemp = cTemp + 273;
  fTemp = (kTemp)*(9/5) - 459.67;
      
  
      $('#cTemp').html("The Temperature is " + cTemp + " celsius"); 
      
       $('#fTemp').html("The Temperature is " + fTemp + " fahrenheit"); 
  
        $('#weatherType').html("The weather is " + weatherType);   
    
      $('#windSpeed').html("The speed of the wind is " + windSpeed + " mph"); 
      
      
      
      
  
      $("button").click(function(){
          $("#cTemp").toggle();
      });
      $("button").click(function(){
          $("#fTemp").toggle();
      });
  
      
      
      
      
      
    
    });
    
  
    
    
    
    
  });
  
  