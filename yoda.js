$(document).ready(function(){
  // set variables for user input & yoda output
  var userInput = $("#userInput")
  var yodaOutput = $("#yodaOutput")

// put event listener on userinput text field, keydown event set with keycode 13 (Enter)
userInput.on("keydown", function(event){
  if( event.keyCode == 13 ){
    event.preventDefault()
    // set variables for AJAX
    var userInputValue = userInput.val()
    // var yodaUrl = "https://yoda.p.mashape.com/yoda?sentence="
    var key = "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
    $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputValue,
      headers: { "X-Mashape-Key": key },
      timeout: 10
      // set response for successful yoda response
    }).done(function( response ){
      setInterval(function(){
        console.log( response )
        $("#yodaOutput").text("...")
      },5000);
      $("#yodaOutput").text(response)
      // display failure message in yodaOutput element text
    }).fail(function(){
      console.log("failed")
      setInterval(function(){
        $("#yodaOutput").text("Forsee this 503 error, I did not")
      },500);
    })
   }
 })
})
