var quotes=[
  
    '"Bruce Lee was an artist and, like him, I try to go beyond the fundamentals of my sport. I want the public to see a knockout in the making." – Sugar Ray Leonard',
    '“Rhythm is everything in boxing. Every move you make starts with your heart, and that’s in rhythm or you’re in trouble.” – Sugar Ray Robinson',  
    '“The question isn’t at what age I want to retire, it’s at what income.” – George Foreman',
    '“His mouth made him feel like he was gonna win. Not his hands, I had my hand. He had his lips.” – Joe Frazier on his fight with Muhammad Ali',
    '“The tempt for greatness is the biggest drug in the world.” – Mike Tyson',
    '“He can have heart, he can hit harder and he can be stronger, but there’s no fighter smarter than me.” – Floyd “Money” Mayweather Jr.',
    '“I fight for perfection” – “Iron” Mike Tyson',
    '“Sure the fight was fixed. I fixed it with a right hand.” – George Foreman on his fight with Michael Moorer',
    '“In order to be at the top and maintain your focus you have to have something that motivates you. For me, it was what I perceived as a lack of respect from the boxing world as well as the media, which made me want to work so hard and be great.” – “Marvellous” Marvin Hagler',
    '“He saved my life, he saved my career. I can’t thank him enough for the chance to fight him.” – Ken Norton, 5-1 underdog seizing his opportunity and winning his fight against Muhammad Ali.',  
      
    ]
    
    function newQuote(){
      var randomNumber = Math.floor(Math.random()*(quotes.length));
      document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];  
    }