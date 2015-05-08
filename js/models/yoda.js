		function Yoda(userInput){
		this.userInput = userInput;
		this.yodaOutput = yodaOutput;
	}

	Yoda.prototype = {
		yodaSpeak: function(){
			$.ajax({
			  url: "https://yoda.p.mashape.com/yoda?sentence=" + this.userInput, 
			  headers: {
			    "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
			  },
			  method: "get",
			  context: this,
			  timeout: 6000
			}).done(function(response){
				console.log("ajax worked")
			});
		}
	}

	

