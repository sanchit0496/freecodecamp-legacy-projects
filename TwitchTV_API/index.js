$(function() {

  var follower = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];

  $.ajax({
    type: 'GET',
    url: 'https://api.twitch.tv/kraken/streams/freecodecamp', //change this to test active
    headers: {
      'client-ID': '7fuu18v0p6bs5m0pvlg4upv4n3965b'
    },
    success: function(data) {
      console.log(data);
      if (data.stream === null) {
        $('#fcc').html(' is offline');
      } else {
        $('#fcc').html(' is ONLINE!');
      }
    },
    error: function(err) {
      alert("Error");
    }
  });

  for (var i = 0; i < follower.length; i++) {

    $.ajax({
      type: 'GET',
      url: 'https://api.twitch.tv/kraken/streams/' + follower[i], //change this to test active
      headers: {
        'client-ID': '7fuu18v0p6bs5m0pvlg4upv4n3965b'
      },
      success: function(dataI) {

        var name = dataI._links.self.slice(37)
        console.log(dataI);
        
        if (dataI.stream === null) {
          $('#status').append(' is offline<br>');
          $('#user').append('<a target="blank" href="https://www.twitch.tv/' + name + '">' + name + '</a><br>')
          $('#game').append('N/A<br>');
        } else {
          $('#status').append(' is ONLINE!<br>');
          $('#user').append('<a target="blank" href="https://www.twitch.tv/' + name + '">' + name + '</a><br>')
          $('#game').append(dataI.stream.game + '<br>');
        }
      },
      error: function(err) {
        alert("Error: One or more users is no longer avaialble");
      }
    });

  }

})