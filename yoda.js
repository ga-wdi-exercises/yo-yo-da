

document.querySelector("#userInput").value.addEventListener(“keyup”,function(event)
{
  if(event.keyCode = 13)
  {
    var userInputHere = document.querySelector("#userInput").value;
    $.ajax
    ({
        type: 'GET',
        dataType:'json',
        url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere,
        headers:
        {
            "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
        },
        timeout: 6000
    })
    .done(function(response)
    {
      console.log("ajax gets requests")
      $("yodaOutput").disabled = false;
      $(#"yodaOutput").value = response;

      //call time interval function and count down for 5 seconds then replace with ...//



    })
    .fail(function(reponse)
    {
      alert("failed");
    })
  }
}
