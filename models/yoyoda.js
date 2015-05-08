var Yoyoda = function(inputText){
	this.inputText = inputText;
}

Yoyoda.prototype = {
	getYodaSpeak: function(){
		$.ajax({
			url: "https://yoda.p.mashape.com/yoda?sentence=" + "blah blah"
			headers: {
				"X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
			},
			timeout: 6000,
			context: this
		}).done(function(response){
			this.outputText = response;
			console.log(response);
		}).error(function(response){
				console.log("failure");
		});
	}



}


// userInputHere,
