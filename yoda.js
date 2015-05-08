
var userInput = $("#userInput").val();
var textArea = $("#userInput")


$(textArea).keypress(function(event){
console.log("test")
  var enter = event.which;

  if(enter === 13){
    newAPICall = new YodaAPI(userInput);
  }
});


// input.on("click", replaceText(input))

//
//
// $(function(){
//   $("#userInput").on("click", function(input){
//
//     function replaceText(input){
//       defaultInput.preventDefault();
//       defaultInput.remove();
//       // input.empty();
//
//       // $(body).append($('<input type="text" id="yodatalk"' + this.innerHTML + '</input>'));
//       var userInput1  =  input.val();
//       return userInput1
//     }
//
//
//   } );
//
//
//
//
// })

function YodaAPI(userInput){

  var yodaOutput = $("#yodaOutput").val();

  yodaOutput.val()

};


YodaAPI.prototype ={
  api: function(userInput)
  {$.ajax({
    url: "https://yoda.p.mashape.com/yoda?sentence=" + userInput,
    headers:{
      "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
    }
  });

}
