function YodaView(){
		document.querySelector("#usersInput").addEventListener('keypress', function (e){

			var key = e.which || e.keycode;
			if (key === 13){
				e.preventDefault();
				this.userInput.bind(this));
			
		});
	}

YodaView.prototype = {
		yodaInput: function(){
			var userInput = $("#usersInput").val();
			this.model = new Yoda(userInput);
			this.model.yodaSpeak().done(function(){
				this.render();
		}.bind(this));
		},
		render: function() {
			$("#yodaOutput").text(this.model.output);
		}
	}