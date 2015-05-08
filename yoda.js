$('document').ready(function() {

  var userInput = document.getElementById('userInput');
  var yodaSpeak = document.getElementById('yodaOutput');

  userInput.addEventListener('keypress', function(event) {
    if (event.keyCode ==13){
      event.preventDefault();
      submit();
    }
  });


  function submit(){
    $.ajax({
      url: ("https://yoda.p.mashape.com/yoda?sentence=" + userInput.value),
      headers: {
        "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
      },
      timeout: 6000
      }).done(function(data){
      console.log(data);
      yodaSpeak.value = data;
      }).fail(function(){
      alert("Request Failed! API is poop.");
      });
  }
});
