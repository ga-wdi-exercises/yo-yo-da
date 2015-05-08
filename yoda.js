
var userInput = document.querySelector("#userInput")


  userInput.addEventListener("submit", function( event ){
    event.preventDefault()
    alert("entered!")

    var key = event.which || event.keyCode;
    if (key === 13)
  })


$.ajax({
  url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere,
  headers: {
    "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
  },
  timeout: 6000
});
