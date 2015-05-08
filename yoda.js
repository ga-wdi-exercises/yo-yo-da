var input = document.querySelector("#userInput");
var output = document.querySelector("#yodaOutput");

input.addEventListener("keypress", function(event){
	event.preventDefault();
	if (event.keyCode === 13){
		var userInputHere = input.value;
		$.ajax({
		  url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere, 
		  headers: {
		    "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
		  },
		  timeout: 6000
		}).done(function(data){
			output.innerHTML = data;
		}).fail(function(){
			output.innerHTML = "hmm"
		});
	}
});