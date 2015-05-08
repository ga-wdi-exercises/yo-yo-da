
$(document).keypress(function(event){
  if(event.which === 13){
    event.preventDefault();
    var i =0
    return $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=" + $("#userInput").val().split(" ").join("+"),
      headers: {
        "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
      },
      timeout: 6000
    }).done(
        function(data){setInterval( function() { $("#userInput").val(data)}, 5000) 
      ).fail(
        if (i===0){setInterval(
            function() { i++; $("#userInput").val("No return you get") }, 5000)
      }
    );

    $("#userInput").val("...");

  }
})
