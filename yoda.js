$('document').ready(function() {

	var yoda = new Yoda();
	var input = $('#userInput')[0];
	var IntervalId;

	//listen for user input and pressing "enter" 
	input.addEventListener("keydown", function(event){
     if (event.keyCode == 13){
     		event.preventDefault();
        var value = input.value;
        yoda.translateYoda(value);
      };
    });


	//define Yoda's constructor
	function Yoda() {

	//run the user's input through the YodaSpeak API
	this.translateYoda = function translateYoda(input) {
		$.ajax({
		  url: "https://yoda.p.mashape.com/yoda?sentence=" + input, 
		  headers: {
		    "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
		  },
		  timeout: 6000
		}).done(function(response) {
			$('#yodaOutput')[0].value = response;
			intervalID = window.setInterval(awkSilence, 5000); //this doesn't work yet
		}).fail(function(){
			$('#yodaOutput')[0].value = "Yoda's taking a nap right now.";
		});
	}

	//ran out of time to actually get this working! boo!
	this.awkSilence = function awkSilence() {
		$('#yodaOutput')[0].value = "...";
	}
}


  
});
