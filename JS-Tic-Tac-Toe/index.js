$(document).ready(function(){
    
    var player = 1;
    var rand = Math.floor(Math.random() * 9) + 1;
    var tag = ".sq" + rand.toString();
   $("#reload").hide();
     $("#you").hide();
     $("#cpu").hide();
     
 function randomSquare(rsqr){
      
 while ($(tag).hasClass('ex') || $(tag).hasClass('oh')){
 rand = Math.floor(Math.random() * 9) + 1;
 tag = ".sq" + rand.toString();
 }
    return tag;
 };
   
   
  $('.square').on('click', function(event){
  var squareSelected = $(this);
      if(squareSelected.hasClass('ex')||squareSelected.hasClass('oh')){
             alert('This square has been selected!');
 }else{
   if(player===1){
              squareSelected.addClass('ex').append('X');
    if(winning('ex')){
                    $("#gameBoard").hide();
 $("#reload").show();                     $("#reload").click(function() {
    location.reload();
        });  
  $("#you").show();              
  
    }else{
        player = 2;
  }         
    }else{
               $(randomSquare(rand)).addClass('oh').append('O');
      if(winning('oh')){
        $("#gameBoard").hide();
      $("#reload").show();
                       $("#reload").click(function() {
   location.reload();
  });
        
 $("#cpu").show();
 }else{
    player = 1;
 }
 }
             
         }
         
     });
     
     
    function winning(symbol) {
      
             if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)){
    return true;
             }else if($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)){
                return true;
             }else if($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)){ 
                return true;
             }else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)){ 
                return true;
             }else if($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)){ 
                return true;
             }else if($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)){ 
                return true;
             }else if($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)){ 
                return true;
             }else if($('.sq7').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq3').hasClass(symbol)){ 
                return true;
  }else{
    return false;
  }           
        
    } 
    
 
    
     
 })
 