$(document).ready (function(){

  var userWords = $("#userInput");
  var yodaWords = $("#yodaOutput");

  Yoda.prototype = {
    search: function(query){
      return $.ajax({
        url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere,
        headers: {
          "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
        },
        timeout: 6000
      });
    }

    talk: function(words){
      yodaWords.val(words);
    }

    thinking: function(){
      this.break = setInterval(function(){
        this.speak("...");
      }.bind(this),5000);
      })

    }

  }



});
