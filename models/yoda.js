function Yoda(userInput){

  this.userInput = userInput;

}

Yoda.prototype = {

  translate: function() {
    return $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=" + this.userInput, 
      headers: {
        "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
      },
      timeout: 6000
    }).done(function(data){
      this.translated = data.responseText;
      console.log(this.translated);
    }).fail(function(){
      window.open("https://www.youtube.com/watch?v=nNl-lD10BZw", "_blank");
      this.translated = "Translation failed."
    });
  }

}