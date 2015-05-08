$(document).ready(function(){


function(userInputHere) {
  document.getElementById("userInput").placeholder= userInputHere;
};

var Speak =
  document.getElementById("yodaOutput").
  $.ajax({
    type: "get",
    dataType: "json",
    url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere,
    headers: {
      "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
    },
    timeout: 6000
  });

});
