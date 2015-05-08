$(document).ready(function(){
	var userInput = $("textarea")

	var query = userInput
		$.ajax({
			url: "https://yoda.p.mashape.com/yoda?sentence=" + query, 
  			headers: {
  				"X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
  				},
  			type: "GET"
  			dataType: "json",
  			timeout: 6000
		}).done(function(response){
			console.log(response.responseText)
		}).done(function(response){
			console.log("API :)")
		})
})	
