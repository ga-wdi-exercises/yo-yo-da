var userInput = document.querySelector("#userInput")
var yodaOutput = document.querySelector("#yodaOutput")

userInput.addEventListener('keyup', function(event){
    if (event.which == 13) {
      event.preventDefault();
      // preventDefault not working(the enter key makes new line)
      var input = userInput.value;

      // api key problem?
      $.ajax({
        url: "https://yoda.p.mashape.com/yoda?sentence=" + input,
        headers: {
          "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
        },
        timeout: 6000,
      }).done(function(response){
          console.log(response)
          // console.log(yodaOutput.innerHTML = response)
          // add function later that will delay 5 seconds with '...' then yodaOutput
      }).fail(function(response){
        console.log(response)
        console.log(yodaOutput.innerHTML = "Having trouble thinking, am I! Ask later, should you.")
        // if(response ==="timeout") {
        //     alert("got timeout");
        //     console.log('ajax is a failure')
        // }
      })
    }

})
