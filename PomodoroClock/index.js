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
    
    
    
    $("#start").click(function(){
      
      $('#breakDIV,#timerDIV').hide();
      $('#start').hide();
      buzzer.play();
      
      $('.container').append('<a href = "#" id="reset" class="btn btn-primary"> Reset</a>');
      
      
      var seconds = timer*60;
      var count = 0;
      timer = timer - 1; 
      
      var countDown = setInterval(function(){
        
        if(seconds>0){
        seconds = seconds -1;
        
          if(count==61){
            timer = timer -1;
            count = 0;
          }
          count = count + 1;
          
          if(seconds%60<10){
            $('#countDown').html(timer + ":0" + seconds%60);
          }else{
           $('#countDown').html(timer + ":" + seconds%60);
          }
        }
        
       
        if(seconds===0){
          var breakTime = $('#breakTime').text();
     seconds = $('#breakTime').text()*60;
        timer = $('#breakTime').text() - 1;
        
        var breakCountDown = setInterval(function(){
  if(seconds>0){
    seconds = seconds -1 ;
    if (seconds%60 < 10){
      $('#countDown').html("Break Time Remaining: " + timer + ":0" + seconds % 60);
    }else{
        $('#countDown').html("Break Time Remaining: " + timer + ":" + seconds % 60);
         
    }
  }
      else{
      cleanInterval(breakCountDown);
      }  
        }, 1000);
        
        clearInterval(countDown);
        
        }
        
        
      },1000);
      
      
      
      
      
    });
    
    
    
    
    
  });