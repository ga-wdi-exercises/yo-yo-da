var el = {};

var Yoda = function(){

  this.awkwardSilence();

  el.yousay.on("keydown", function(evt){
    if(evt.keyCode === 13){ 
      evt.preventDefault();
      var input = el.yousay.val();
      if(input){
        clearInterval(this.sleepiness);
        this.speak("Hmm...");
        this.search(input)
          .done(function(response){
            this.speak(response);
            this.awkwardSilence();
          }.bind(this))
          .fail(function(){
            this.speak("Having trouble thinking, am I!");
            this.awkwardSilence();
          }.bind(this));
      }
    }
  }.bind(this));

};

Yoda.prototype = {
  speak: function(words){
    el.yodasay.animate({
      opacity: 0
    }, 1000, function(){
      el.yodasay.val(words);
      el.yodasay.css("opacity", 1);
    }.bind(this));
  },
  search: function(query){
    return $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=" + query, 
      headers:{
        "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
      }
    });
  },
  awkwardSilence: function(){
    this.sleepiness = setInterval(function(){
      this.speak("...");
    }.bind(this), 5000);
  }
};

$(document).ready(function(){

  el.yoda    = $("#image");
  el.yousay  = $("#userInput");
  el.yodasay = $("#yodaOutput");
  var yoyoda = new Yoda();

});
