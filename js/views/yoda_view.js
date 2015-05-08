var YodaView = function(model){
	this.model = model;
	this.userInput = document.getElementById("userInput");
	this.yodaOutput = document.getElementById("yodaOutput")
}

YodaView.prototype = {
	// grabs user input, sends it to a callback, which in this case is Yoda.yodafy
	getInput: function(callback){
		var input = this.userInput.value;
		callback(input);
	},
	// updates the HTML of the page once Yoda's text is changed.
	render: function(){
		this.yodaOutput.innerHTML = this.model.says;
	}
}