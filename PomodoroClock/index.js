$(document).ready(function(){
  
    var timer = 1;
    var breakTime = 10;
    var buzzer = $('#buzzer')[0];
    
    $('#minusBreak').click(function(){
     breakTime = $('#breakTime').text();
     if(breakTime>5){
  breakTime = $('#breakTime').text() - 5;    
     } 
      $('#breakTime').html(breakTime);
    });
    
    $('#addBreak').click(function(){
     breakTime = $('#breakTime').text()  - 0 + 5;
      $('#breakTime').html(breakTime);
    });
    
     
    $('#minusTimer').click(function(){
     timer = $('#timer').text();
     if(timer>5){
       timer = $('#timer').text() - 5;   
     } 
      $('#timer').html(timer);
    });
    
    
     $('#addTimer').click(function(){
     timer = $('#timer').text()  - 0 + 5;
      $('#timer').html(timer);
    });
    
    
    
    $("start").onClick(function(){
      
      $('#breakDIV,#timerDIV').hide();
      $('#start').hide();
      buzzer.play();
      
      $('.container').append('<a href = "#" id="reset" class="btn btn-primary"> Reset</a>');
      
      
      var seconds = timer*60;
      var count = 0;
      timer = timer - 1; 
      
      var countDown = setInterval(function(){
        
      })
      
      
      
      
      
    });
    
    
    
    
    
  });
