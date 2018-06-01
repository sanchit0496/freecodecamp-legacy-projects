var quotes=[
  
    '"Bruce Lee was an artist and, like him, I try to go beyond the fundamentals of my sport. I want the public to see a knockout in the making." <br><br> – Sugar Ray Leonard',
    '“Rhythm is everything in boxing. Every move you make starts with your heart, and that’s in rhythm or you’re in trouble.” <br><br> – Sugar Ray Robinson',  
    '“The question isn’t at what age I want to retire, it’s at what income.”<br><br> – George Foreman',
    '“His mouth made him feel like he was gonna win. Not his hands, I had my hand. He had his lips.”<br><br> – Joe Frazier <br><em> On his fight with Muhammad Ali<em>',
    '“The tempt for greatness is the biggest drug in the world.”<br><br> – Mike Tyson',
    '“He can have heart, he can hit harder and he can be stronger, but there’s no fighter smarter than me.”<br><br> – Floyd "Money" Mayweather Jr.',
    '“I fight for perfection” –<br><br> “Iron” Mike Tyson',
    '“Sure the fight was fixed. I fixed it with a right hand.”<br><br> – George Foreman <br><em> On his fight with Michael Moorer</em>',
    '“In order to be at the top and maintain your focus you have to have something that motivates you. For me, it was what I perceived as a lack of respect from the boxing world as well as the media, which made me want to work so hard and be great.” –<br><br> - “Marvellous” Marvin Hagler',
    '“He saved my life, he saved my career. I can’t thank him enough for the chance to fight him.”<br><br> – Ken Norton, <br><em> 5-1 underdog seizing his opportunity and winning his fight against Muhammad Ali.</em>',  
      
    ]
    
    function newQuote(){
      var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quote').innerHTML=quotes[randomNumber];  
    }