var YoyodaView = function(yoyodaModel){
  var newText = document.querySelector("#user-input")
	console.log(newText);
  this.yodaSpeak = document.querySelector("#yodaOutput");
  this.model = yoyodaModel;
	$('newText').keyup(function (event) {
	  if (event.keyCode == 13) {
	    addYodaSpeak();
	    return false;
	  }
	});
  this.render();
	newText.setTimeout(function(){this.yodaSpeak.value('...')},3000)
}

YoyodaView.prototype = {
	addYodaSpeak: function(event){
		event.preventDefault();
		var inputText = this.newText.value;
		var newyoyoda = new Yoyoda(inputText);
		this.render();
	},
	render: function(){
		this.yodaSpeak.text = this.model.newyoyoda;
	},


}
