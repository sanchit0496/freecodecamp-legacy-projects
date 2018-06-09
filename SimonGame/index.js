$(document).ready(function() {  
    var attempt = [], simon = [], level = 1, lives = 3, index = 0, flag = true, color = "", playerTurn = false, soundIndex;
      var slices = ["red", "blue", "yellow", "green"];
      var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
      var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
      var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
      var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
      var sounds = [redSound, blueSound, yellowSound, greenSound];
      
  
  
      $("#level").html(level);																		// set level count to 1
      $("#lives").html(lives);																		//set lives count to 3
          
      $(".slice").on("click", function() {
          if (playerTurn) {																					// only add to attempt array if it's player's turn
              color = $(this).attr("id")
              attempt.push(color);																		// push guess into attempt array
  
              $(this).fadeOut(150).fadeIn(150);
              soundIndex = slices.indexOf(color);
              sounds[soundIndex].play();
  
              if (attempt[index] !== simon[index]) {									// if guess is incorrect	
                  alert("Incorrect, try again.");
                  patternBlink(simon);
                  index = 0;
                  attempt = [];
                  //flag = true;
              }
              else {
                  if (index === simon.length-1) {									// if entire guess is correct
                      playerTurn = false;																		// turn control to code for new pattern, user can't click
                      attempt = [];																					// reset attempt array
                      level++;																							// level up
                      $("#level").html(level);
                      index = 0;																						// reset index
                      color = slices[Math.floor(Math.random() * (3 + 1))];	// add upon pattern
                      simon.push(color);
                      patternBlink(simon);
                  }
                  else if (index !== simon.length-1) {						// if current guess is correct, but not the end of pattern
                      index++;																							// increase index
                      return;
                  }
              }
          }
      });
  
      $("#start-reset").on("click", function() {									// when start button is clicked
          if ($(this).html() === "Start") {
              simon = [];																							// ensure simon array is empty
              $(this).html("Reset");																	// change text in start button to reset
  
              color = slices[Math.floor(Math.random() * (3 + 1))];		// add first color
              simon.push(color);
  
              patternBlink(simon);																		// call patterBlink() to make first pattern blink
          }
          else {																										// reset game
              reset();
          }
      });																													// end of start button click
  
      function patternBlink(simon) {
          setTimeout(function() {																		// delay next pattern blink from last button guess
              for(var i = 0; i < simon.length; i++) {									// make each blink sequentially
                  (function(i) { 
                      setTimeout(function() {
                          soundIndex = slices.indexOf(simon[i]);
                          sounds[soundIndex].play();
                          $("#"+simon[i]).fadeOut(150).fadeIn(150);					// make selected slice blink
                      }, i * 800);
                  })(i);																								// make it user's turn to play														
              }		
          }, 1000);
          playerTurn = true;
      }
  
      function reset() {
          $("#start-reset").html("Start");
          level = 1;
          $("#level").html(level);
          //lives = 3;
          attempt = [];
          simon = [];
          index = 0;
      }
  });																														// end of document.ready
  