var $userInput = $('#userInput');
var $yodaOutput = $('#yodaOutput');

var awkwardSilence = window.setInterval(function(){
  $yodaOutput.val('...')
  TweenMax.fromTo($yodaOutput, 0.3, {opacity: 0}, {opacity: 1});
}, 5000);

$userInput.on('keydown', function(event){
  var input = $userInput.val();
  if(event.keyCode == 13){
    event.preventDefault();
    $userInput.blur();
    $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=" + input, 
      headers: {
        "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
      },
      timeout: 6000
    }).done(function(response){
      console.log(response);
      TweenMax.fromTo($yodaOutput, 0.3, {opacity: 0}, {opacity: 1});
      $yodaOutput.val(response);
    }).fail(function(){
      TweenMax.fromTo($yodaOutput, 0.3, {opacity: 0}, {opacity: 1});
      $yodaOutput.val("Broken, I am.");
    });    
  };
})
