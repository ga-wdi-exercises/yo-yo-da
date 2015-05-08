$(document).ready(function(){
  var userInput = document.querySelector('#userInput').addEventListener('keypress', function (e) {
                      var key = e.which || e.keyCode;
                      if (key === 13) {
                        console.log('#userInput');
                      }
                  });


// $.ajax({
//   url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere, 
//   headers: {
//     "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
//   },
//   timeout: 6000
// });

}