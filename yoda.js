//First time trying to use a mashape api - was not able to get it to work with ajax
//i still have a lot of practice to do on OOP JS



$('document').ready(function() {
  var translate = new Translate();



var input = ""

function Translate(input) {
  this.input = input;

  // your code to search the API and return a yoda translate object here

}


Translate.prototype = {
  
  refresh: function(){
  	var yodaTranslateURL = "https://yoda.p.mashape.com/yoda?sentence=" + input;
		return $.ajax({
	    url: 'yodaTranslateURL', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
	    type: 'GET', // The HTTP Method
	    data: {}, // Additional parameters here
	    datatype: 'json',
	    context: this,
	    success: function(data) { alert(JSON.stringify(data)); },
	    error: function(err) { alert(err); },
	    beforeSend: function(xhr) {
	    xhr.setRequestHeader("X-Mashape-Authorization", "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"); // Enter here your Mashape key
	    }
		});
	}
}


// define your TranslateView here
function TranslateView() {
  $('#userInput').lookupTranslate(function(e) {
    if (e.keyCode == '13') {
        alert('code');
    }
});


TranslateView.prototype = {
  lookupTranslate: function() {
    var input = $("#userInput").val();
    this.model = new Translate(input);
    this.model.refresh().then(function(){
      this.render();
    }.bind(this));
    console.log(input);
  },

}

}

})
