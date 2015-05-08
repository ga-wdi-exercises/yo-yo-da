
var YodaSpeak = function(input) {
  this.input = input;
  this.getYodafied;
  this.enterSentence;
}

YodaSpeak.prototype = {

  getYodafied: function() {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://yoda.p.mashape.com/yoda?sentence=talk+to+me",
      headers: {
        "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
      },
      timeout: 6000

    }).done(function(reponse){
      console.log(resopnse[0].responseText)
      var yodaResponse = response[0].responseText;
      var yodaOutput = document.getElementById("yodaOutput");
      yodaOutput.appendChild(yodaResponse);

    }).fail(function(){
      var yodaOutput = document.getElementById("yodaOutput");
      yodaOutput.innerText = "unavailable, Yoda is";
    });
  },

  enterSentence: function() {
    document.getElementById("userInput").addEventListener("submit", function () {
          this.getYodafied;
    })
  }


}
