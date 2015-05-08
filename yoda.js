//get input string from user
var userInputHere = document.getElementById("userInput")
var output = document.getElementById('yodaOutput')

$(document).ready(function(){
	//send the imput to the API
	$.ajax({
	  	url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere, 
	 	type: "GET",
	    timeout: 6000,
	    headers: {
	    "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
	  	},
	  	datatype: "json" 
	}).done(function(response){
		//hope that the string comes back yoda-ified, print it on the console
		console.log(response)
		//enter the Yoda-ified into yodaOutput textarea
		output.value = response
	}).fail(function(){
		//this happens if the request to the API didn't work
		console.log("something did not go right")
	}).always(function(){
		//this happens regardless of whether or not the request worked
		console.log("at least it did something!")
	});
})

//TODO
//Yoda needs to be able to accept user input
var Yoda = function(userInputHere){
	this.text = userInputHere.value
}

//Yoda needs to be able to do something with the input
//Yoda sends the input to the API
//Yoda get a response from the API
//Yoda needs to print the response back on the webpage
//... might need to add something so that when the user presses enter, the input is sent
//  WHY DO I KEEP GETTING 503 SERVICE UNAVAILABLE