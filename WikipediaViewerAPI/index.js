$(document).ready(function(){
  
  
    $('#search').click(function(){
    
      var searchTerm = $('#searchTerm').val();
      
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&callback=?"
      
      $.ajax({
        type : "GET",
        url : url,
        async:false,
        dataType:'json',
        success: function(data){        
          
       $('#results').html(''); //clears all data prior to running/re-running for loop   
          
          
       for (var i = 0; i < data[1].length; i++) {
            
          $('#results').append("<a href=" + data[3][i] +"><h1>" + data[1][i] + "</h1></a>" + "<h3>" + data[2][i] + "</h3><br><br>");
          }
                  
      $("#searchTerm").val('');        
        },
        error: function(error){
          alert("Error")
        }
        
        
    });
    });
    
    

    //Code Snippet frm Stack OverFlow, kept outside d AJAX call

    $('#searchTerm').bind('keypress', function(e) { 
      if (e.keyCode == 13) {
        $("#search").click();
    });
    
    
  });                  
                    