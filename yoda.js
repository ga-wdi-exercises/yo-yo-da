$(document).ready(function(){

  function replaceText( text ){
    $("#yodaOutput").text(text)
  }

  function ellipses(){
    replaceText("...")
  }

  function makeTransparent(){
    $("#yodaOutput").attr("style","opacity:0")
  }

  function makeOpaque(){
    $("#yodaOutput").attr("style","opacity:1")
  }

  $("#userInput").keypress(function ( ){
    if( event.which == 13 ){
      var userInput= $("#userInput").val()
      var yoda = document.querySelector("#image")

      $.ajax({
        url: "https://yoda.p.mashape.com/yoda?sentence=" + userInput,
        headers:{"X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"},
        type: 'GET',
        dataType: 'json',
        timeout:6000
      }).done(function(response){
        console.log("response:", response.responseText)
        //For some reason I never get a "successful response". My text does in fact get yoda-ized but always goes to the fail function, hence my testing for success in the fail function. Odd.
      }).fail(function( response ){
        if (response.status == 200){
          replaceText(response.responseText)
          yoda.style.transform = "scaleX(1)";
          yoda.webkitTransform = "scaleX(1)";
          setInterval(makeTransparent, 4000)
          setInterval(makeOpaque, 5000)
          setInterval(ellipses,5000)
        }
        else{
          console.log("Ajax request was not successful due to:", response.status, "(", response.statusText, ")")
          replaceText("A current disturbance in the force there is. Later try.")
          //Uh oh. Watch Yoda flip out!!
          yoda.style.transform = "scaleX(-1)";
          yoda.webkitTransform = "scaleX(-1)";
          setInterval(makeTransparent, 4500)
          setInterval(makeOpaque, 5000)
          setInterval(ellipses,5000)
        }
      }).always(function(){
      })
    }
  })
})
