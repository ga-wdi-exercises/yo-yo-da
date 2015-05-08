// var yoda = new YodaView()

var input = document.querySelector("#userInput")
input.addEventListener('keypress', function(event){
    if (event.keyCode === 13) {
      event.preventDefault();
      var userPhrase = input.value
      var newYodaPhrase = new YodaPhrase(userPhrase)
        }
  })

// function YodaView(){
// wanted to include the above funtionality into this function, but
// recieved errors on my event listener(console said the 'input' var was null)
// }

var yodaReply = document.querySelector("#yodaOutput")

function YodaPhrase(phrase){
  this.phrase = phrase
  $.ajax({
    url: "https://yoda.p.mashape.com/yoda?sentence=" + phrase,
    headers: {
      "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
    },
    timeout: 6000
  }).done(function(response){
    console.log(response)
  }).fail(function(){
    console.log('no worky')
    yodaReply.innerHTML = 'wtf, yoda happy he is not'
  })
}
