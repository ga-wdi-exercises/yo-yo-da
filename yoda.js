$(document).ready(function(){

var YodaView = function(){
  var yodaOutput = document.querySelector("#yodaOutput")
  yodaOutput.innerHTML = yodaPhrase
  //yodaOutput.innerHTML = ""
}

var userInput = document.querySelector("#userInput")

userInput.addEventListener("submit", Yoda.lookup(){
  event.preventDefault()
  console.log("your input is going to yoda...")
}
  ///call the Yoda.lookup function when user hits 'enter'

  Yoda.lookup = function(userInput){
    $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=" + userInput,
      headers: {
        "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
      },
      type: "GET"
      datatype: "json"
    }).done(function(response){
      console.log("AJAX REQUEST SENT")
      //return response
    }).fail(function(response){
      console.log("AJAX REQUEST FAILED")
    })
  }

  var userPhrase = userInput.value
  var yodaPhrase = Yoda.lookup(userPhrase)
  var yodaView = new YodaView(yodaPhrase)
}
}
