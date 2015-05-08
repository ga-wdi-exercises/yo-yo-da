var Yoda = function(){
	this.says;
}

Yoda.prototype = {
	// will yodafy input, eventually. Console-logging for now to test the API.
	yodafy: function(userInput){
		$.ajax({
			context: this,
  			url: "https://yoda.p.mashape.com/yoda?sentence=" + userInput, 
  			headers: {
    			"X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
  			},
  			timeout: 6000
  		}).done(function(){
  			console.log("Do or do not, there is no try.");
  		}).fail(function(){
  			console.log("That is why you failed.")
  		});
	},
	// will change what Yoda says to Hmm... every few seconds.
	hmm: function(){
		hmm = setInterval(function(){
			this.says = "Hmm...";
		}, 5000)
	}
}