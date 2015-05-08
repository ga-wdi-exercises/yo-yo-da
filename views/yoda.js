function YodaView() {
  $("#userInput").keypress(function(event){
    if (event.which == 13){
      event.preventDefault;
      this.yodaSpeak();
    }
  }.bind(this));  
}

YodaView.prototype = {
  yodaSpeak: function(){
    var userInput = $("#userInput").val();
    this.model = new Yoda(userInput);
    this.model.translate().then(function(){
      this.render();
    }.bind(this));
  },

  render: function(){
    console.log("Render called")
    $("#yodaOutput").text(this.model.translated);
  }
}