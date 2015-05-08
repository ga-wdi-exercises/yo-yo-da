var yoda = new Yoda();
var yodaView = new YodaView(yoda);

$(document).ready(function(){
	// when enter is pressed, input is captured, sent to yodafy function
	document.addEventListener("keyup", yodaView.getInput(yoda.yodafy));
})