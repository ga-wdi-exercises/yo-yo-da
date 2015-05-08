$("#userInput").keypress(function(event){
  if(event.which == 13){
    event.preventDefault();
    var userInputHere = $("#userInput").val();

    var request = $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere,
      headers: {
        "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
      },
      timeout: 6000
    });

    request.done(function(data){
      console.log("success");
      $("#yodaOutput").append(data);
    });

    request.fail(function(){
      console.log("API not responding.");
    });
  };
});
