$(document).ready(function(){

  function replaceText( text ){
    $("#yodaOutput").text(text)
  }

  function ellipses(){
    replaceText("...")
  }

  $("#userInput").keypress(function ( ){
    if( event.which == 13 ){
      var userInput= $("#userInput").val()

      $.ajax({
        url: "https://yoda.p.mashape.com/yoda?sentence=" + userInput,
        headers:{"X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"},
        type: 'GET',
        dataType: 'json',
        timeout:6000
      }).done(function(response){
        console.log("response", response)
      }).fail(function( response ){
        console.log("Response status:", response.status)
        if (response.status == 200){
          replaceText(response.responseText)
          setInterval(ellipses,5000)
        }
        else{
          console.log("AJAX request was not successful due to:", response.statusText)
          replaceText("A current disturbance in the force there is. Later try.")

        }
      }).always(function(){
        console.log("Always")
      })
    }
  })
})



/*
<textarea id="userInput" placeholder="..."></textarea>
<div id="image" style="background-image:url('yoda.jpg');"></div>
<textarea id="yodaOutput" disabled="disabled">Saying what, am I?</textarea>
*/
