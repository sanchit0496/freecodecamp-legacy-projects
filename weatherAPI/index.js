$(document).ready(function(){
  
  var api;
  var lon;
  var lat;
  var fTemp;
  var cTemp;
  var kTemp;
  

  
if (navigator.geolocation) {   navigator.geolocation.getCurrentPosition(function (position) {

lat = (position.coords.latitude).toFixed(2)
lon = (position.coords.longitude).toFixed(2)
  
 $("#data").html("The Latitude is " + lat + ", and The Longitude is " + lon);       
  
  api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`
  weatherInfo()
  
 });
   }

 
  
  function weatherInfo(){
$.getJSON(api, function(data){
    
var weatherType = data.weather[0].description;
var cTemp = data.main.temp;
var windSpeed = data.wind.speed;
var city = data.name;  
var tempSwap=true;
		

    
kTemp = (cTemp + 273).toFixed(2);
fTemp = ((kTemp)*(9/5) - 459.67).toFixed(2);
    

$('#place').html("The City is " + city); 

    
    
$('#fTemp').html("The Temperature is " + fTemp + " &#8457" + " (<em>Click For Celsius</em>)"); 

$('#weatherType').html("The Weather Is " + weatherType);   
  
$('#windSpeed').html("The Speed of The Wind Is " + windSpeed + " mph"); 
    
    
    
   
$("#fTemp").click(function(){
if(tempSwap===false){
$("#fTemp").html("The Temperature Is " + fTemp + " &#8457;" + " (<em>Click For Celsius</em>)"); 
          tempSwap=true;
 }
 else{
$("#fTemp").html("The Temperature Is " +cTemp + " &#8451;" + " (<em>Click For Fahrenheit<em>)");
          tempSwap=false;
}   
});
   

 if(fTemp>80){
     $('body').css('background-image','url(https://images.unsplash.com/photo-1414269665217-a57681e266b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=6fd9f051bea811268593340698b6a822)');
    } 
     else if(fTemp>70){
         $('body').css('background-image','url(https://images.unsplash.com/photo-1428592953211-077101b2021b?crop=entropy&fit=crop&fm=jpg&h=1000&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925)');
     }
  else if(fTemp>60){
         $('body').css('background-image','url(https://images.unsplash.com/photo-1428592953211-077101b2021b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=9dee70ba78c49619bc7f5c8a91778f2b)');
     }
  else if(fTemp>50){
        $('body').css('background-image','url(https://images.unsplash.com/photo-1422020297037-97bd356cc312?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2400)');
      } 
  });
  }    

});
 
