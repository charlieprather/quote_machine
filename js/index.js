


 var quote1 = [
   
   ["You have a wide array of people that are watching something, and you cannot please everyone at the same time. Half the people will love it; half the people will hate it. Half the people won't see it. <br /> <br />", "-David A. R. White"],
               
              ["As Bromberger observed, rules are understood to be elements of the computational systems that determine the sound and meaning of the infinite array of expressions of a language; the information so derived is accessed by other systems in language use.<br /><br />",  " -Noam Chomsky"],
               
               ["Doing linear scans over an associative array is like trying to club someone to death with a loaded Uzi <br /><br />", "-Larry Wall"],
   
               ["Diversity has been written into the DNA of American life; any institution that lacks a rainbow array has come to seem diminished, if not diseased. <br /><br />", " -Joe Klein"],
   
               ["Working in an office with an array of electronic devices is like trying to get something done at home with half a dozen small children around. The calls for attention are constant <br /><br />",  " -Marilyn vos Savant"]
   
              ];
              
      $(".button").click(function() {
  var randomQuote = quote1[Math.floor(Math.random() * quote1.length)];
  $(".quote1").html(randomQuote);
});