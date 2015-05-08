$(document).ready(function(){

var userInput;

function searchTerm(e){
  if(e.which == 13) {
    userInput = $('textarea#userInput').val();
    var url = "https://yoda.p.mashape.com/yoda?sentence="+userInput
    return $.ajax({
      url: url,
      headers: {
         "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
       },
      timeout: 60000000000
    }).done(function(){
      console.log("ajax request success!")
    }).fail(function(){
      console.log("ajax request fails!")
    }).always(function(){
      console.log("this always happens regardless of successful ajax request or not")
    })






  }//End of if

} //End of search term


$("#userInput").keydown(searchTerm)


});//End of document ready
