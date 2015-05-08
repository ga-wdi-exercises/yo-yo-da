var input = document.querySelector( "#userInput" );
var output = document.querySelector( "#yodaOutput" );

function YodaView(){
  this.awkwardSilence();
  input.addEventListener( "keypress", this.sendForTranslation.bind( this ) );
}

YodaView.prototype = {
  sendForTranslation: function( event ){
    var key = event.which || event.keyCode;
    if ( key === 13 ){
      words = input.value;
      new Yoda( words, function( yoda ){
        this.model = yoda;
      }.bind( this ));
      this.render();
    }
  },
  render: function(){
    if ( this.model.results ){
      // API not working. If it was, would output with proper json notation.
      output.value = this.model.results;
    }
    else if ( this.model.fail ){
      output.value = this.model.fail;
    }
  },
  awkwardSilence: function(){
    setInterval( function(){
      output.value = "...";
    }, 5000)
  }
}
