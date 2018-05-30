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
      kTemp = data.main.temp;
      var windSpeed = data.wind.speed;
      var city = data.name;  
    
    fTemp = (kTemp)*(9/5) - 459.67;
        cTemp = kTemp-273
        
    
        $('#fTemp').html("The Temperature is " + fTemp );    
    
          $('#weatherType').html("The weather is " + weatherType);   
      
        $('#windSpeed').html("The speed of the wind is " + windSpeed + " mph"); 
        
        
        
        
          $("#fTemp").click(function(){
            if(tempSwap===false){
              $("#fTemp").html("The Temperature is " + fTemp + " &#8457;"); 
              tempSwap=true;
            }
            else{
              $("#fTemp").html("The Temperature is " + cTemp + " &#8451;");
              tempSwap=false;
            }   
          });
        
        
        
      
      });
      
    
      
      
      
      
    });
    
    