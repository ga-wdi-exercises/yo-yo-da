// API
var yoda = function(userInputHere){
	var runThis = "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere
	$.ajax({
		url: runThis, 
	 	headers: {
	    "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
	 	},
	 	type: "GET",
	 	dataType: "json",
	  	timeout: 6000
	}).done(function(response){
		console.log(response)
	}).fail(function(response){
		console.log("ajax request failed")
	})
}
// SET KEY ACTION
var yodaSpeak = document.getElementById("userInput");
yodaSpeak.addEventListener("keypress", function() {
    if (key === 13) { // 13 is enter
    	var userInputHere = document.getElementById("userInput").value;
		yoda(userInputHere);
		preventDefault();
    }
});

// RENDER VIEW

