$(document).ready(function(){

var userInput = document.querySelector("#userInput")

  userInput.addEventListener( "keyup", function( event ){
    event.preventDefault()
    if( event.keyCode == 13 ){
      console.log( userInput.value )
    }
  })


  var yodaURL = "https://yoda.p.mashape.com/yoda?sentence="
  var inputPhrase = "super+duper"

  $.ajax({
    url:  yodaURL + inputPhrase,
    headers: {
      "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
    },
    timeout: 6000,
    type: "GET",
    dataType: "json"
  }).done( function( response ){
    console.log( "you did it" )
  }).fail( function( response ){
    console.log( "ajax fail" )
  })


})
