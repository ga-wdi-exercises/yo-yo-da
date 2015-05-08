// $.ajax({
//   url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere,
//   headers:{
//     "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
//   },
//   timeout: 6000
// });


// var userInput = document.getElementById("userInput").HTML()
var yodaSpeaks = "https://yoda.p.mashape.com/yoda?sentence="

$("#userInput").on("keydown", function(event){
  event.preventDefault()
  $.ajax({
        url:yodaSpeaks + userInput,
        headers:{
          "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
        },
        timeout:6000,
        type:"GET",
        datatype: "jsonp"
      }).done(function(response){
        console.log("This works!")
      }).fail(function(){
        console.log("This doesn't work, womp, womp.")
      })
  })

  //cannot seem to make this api key log anything the console, it fails silently

  
