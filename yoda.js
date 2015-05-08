function updateTranslationText(translation) {
  $("#yodaOutput").fadeOut(function() {
    $(this).text(translation).fadeIn();
  });
}

function translate (untranslated) {
  $.ajax({
    url: "https://yoda.p.mashape.com/yoda?sentence=" + untranslated, 
    headers: {"X-Mashape-Key":
  				"OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"},
    timeout: 6000
    }).done(function(response) {
    	updateTranslationText(response);
    }).fail(function() {
    	updateTranslationText("hmmm... crappy Yoda API working, is not! hmmm.");
    })
}

$(document).ready(function(){
  
  // Setting awkward silence interval to 10 seconds instead of 5, to minimize
  // chance of overwriting translation too quickly. Ideally I would have wanted to reset
  // the awkward silence interval every time the translation was updated.
  window.setInterval(function(){updateTranslationText("...")}, 10000);

  $("#userInput").keydown(function(event) {
    if (event.keyCode === 13) {
      translate($("#userInput").val());
    }
  })
})