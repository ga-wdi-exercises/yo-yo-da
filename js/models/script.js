function Yoda( words, callback ){
  $.ajax({
    url: "https://yoda.p.mashape.com/yoda?sentence=" + words,
    headers: {
      "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
    },
    timeout: 6000
  }).done( function( response ){
    this.results = response;
    callback( this );
  }).fail( function(){
    this.fail = "Your ajax request, it did fail.";
    callback( this );
  });
}

Yoda.prototype = {

}
