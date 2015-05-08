function Yoda(input, output) {
	this.input = input;
	this.output = output
}

Yoda.prototype = {
	refresh: function(){
    return $.ajax({
    	url: "https://yoda.p.mashape.com/yoda?sentence=" + this.input, 
  		headers: {"X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"},
  		timeout: 6000
  	});.done(function(data){
    	this.output = data;
    }.bind(this));
}

function YodaView() {
	$('#userInput').on('click', this.lookupInput.bind(this));
}

YodaView.prototype = {
  lookupInput: function() {
    var input = $("#userInput").val();
    this.model = new Yoda(input);
    this.model.refresh().then(function(){
      this.render();
    }.bind(this));
  },

  render: function() {
    $("#yodaOutput").text(this.model.output);
  }